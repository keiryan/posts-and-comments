import { useEffect, useState } from "react";
import {
  Container,
  InputContainer,
  IconContainer,
  StyledInput,
  NoResults,
  SearchIcon,
  GalleryContainer,
  Card,
  CardTitle,
  UserId,
  CardBody,
  CardText,
  ChevronContainer,
  CardAndBodyContainer,
  UserIcon,
  Chevron,
  StyledNavLink,
} from "./styles.partThree";
import hstkFetch from "../../hstkFetch";
import LoadingBalls from "../../components/Loading Balls/loadingballs";

function CardComponent({ title, id, body }) {
  return (
    <Card>
      <CardAndBodyContainer>
        <UserIcon />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <UserId>{id}</UserId>
          <CardText>{body}</CardText>
        </CardBody>
      </CardAndBodyContainer>
      <ChevronContainer mobile={{ hide: true }}>
        <Chevron />
      </ChevronContainer>
    </Card>
  );
}

function CardGallery({ posts }) {
  return (
    <GalleryContainer>
      {posts.map((post) => (
        <StyledNavLink key={post.id} to={`part-three-detail/${post.id}`}>
          <CardComponent title={post.title} id={post.id} body={post.body} />
        </StyledNavLink>
      ))}
    </GalleryContainer>
  );
}

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

const Input = ({ handleChange }) => (
  <InputContainer>
    <IconContainer>
      <SearchIcon />
    </IconContainer>
    <StyledInput placeholder="Search text..." onChange={handleChange} />
  </InputContainer>
);

export default function PartThree() {
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
