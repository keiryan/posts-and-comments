import { useEffect, useState } from "react";
import {
  Container,
  InputContainer,
  IconContainer,
  StyledInput,
  NoResults,
  SearchIcon,
} from "./styles.partTwo";
import PartThreeDetail from "./PartThreeDetail";
import CardGallery from "../../components/Card/card";
import hstkFetch from "../../hstkFetch";
import LoadingBalls from "../../components/Loading Balls/loadingballs";

const Input = ({ handleChange }) => (
  <InputContainer>
    <IconContainer>
      <SearchIcon />
    </IconContainer>
    <StyledInput placeholder="Search text..." onChange={handleChange} />
  </InputContainer>
);

const BodyContents = (props) => {
  return (
    <>
      <Input handleChange={props.handleChange} value={props.value} />
      {props.posts.length > 0 ? (
        <CardGallery posts={props.posts} />
      ) : (
        <NoResults>No Results</NoResults>
      )}
    </>
  );
};

export default function PartTwo() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");

  const setData = (data) => {
    setLoading(false);
    setPosts([...data]);
  };

  useEffect(() => {
    hstkFetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <Container style={{ justifyContent: !loading ? "flex-start" : "center" }}>
      {!loading ? (
        <BodyContents
          handleChange={handleChange}
          value={value}
          posts={filteredPosts}
        />
      ) : (
        <LoadingBalls />
      )}
    </Container>
  );
}
