import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import hstkFetch from "../../hstkFetch";
import {
  Container,
  Card,
  CardTitle,
  UserId,
  CardBody,
  CardText,
  ChevronContainer,
  CardAndBodyContainer,
  UserIcon,
  Chevron,
  StyledComment,
  CommentEmail,
  CommentBody,
  ToggleVisibility,
  VisibilityIconContainer,
} from "./styles.partThreeDetail";

import LoadingBalls from "../../components/Loading Balls/loadingballs";

const Comment = (props) => {
  const { comment, visibilityData, handleVisibilityData } = props;
  const { id, email, body } = comment;
  const exists = typeof visibilityData?.[id] !== "undefined";
  const [visible, setVisible] = useState({
    visible: exists ? visibilityData?.[id] : true,
  });

  const handleToggleVisibility = () => {
    handleVisibilityData(id);
  };

  useEffect(() => {
    const exists = typeof visibilityData?.[id] !== "undefined";
    const isVisible = exists ? visibilityData?.[id] : true;
    setVisible({ visible: isVisible });
  }, [visibilityData, id]);

  return (
    <StyledComment visible={visible} key={id}>
      <CommentEmail visible={visible}>{email}</CommentEmail>
      <CommentBody visible={visible}>{body}</CommentBody>
      <VisibilityIconContainer
        visible={visible}
        onClick={handleToggleVisibility}
      >
        <ToggleVisibility />
      </VisibilityIconContainer>
    </StyledComment>
  );
};

const CardAndComments = (props) => {
  const { data, visibilityData, handleVisibilityData } = props;
  const { title, body, id } = data.post;

  return (
    <>
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

      {data.comments.map((comment) => (
        <Comment
          key={comment.id}
          handleVisibilityData={handleVisibilityData}
          visibilityData={visibilityData}
          comment={comment}
        />
      ))}
    </>
  );
};

export default function PartThreeDetail() {
  const [data, setData] = useState({
    post: {},
    comments: [],
  });
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const setDataAndLoading = (passedData) => {
    setLoading(false);
    setData({ ...passedData });
  };

  const [fullData, setFullData] = useState(
    JSON.parse(localStorage.getItem("comments")) || {}
  );

  const fetchData = async () => {
    const postData = await hstkFetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    )
      .then((response) => response.json())
      .then((fetchedPostData) => fetchedPostData);

    const commentData = await hstkFetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
    )
      .then((response) => response.json())
      .then((fetchedCommentData) => fetchedCommentData);

    setDataAndLoading({ post: { ...postData }, comments: commentData });
  };

  const handleVisibilityData = (id) => {
    const nextValue = typeof fullData[id] === "undefined" ? false : !fullData[id] || false;
    const completeData = {
      ...fullData,
      [id]:
      nextValue,
    };
    localStorage.setItem("comments", JSON.stringify({ ...completeData }));
    setFullData({ ...completeData });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container style={{ justifyContent: loading ? "center" : "flex-start" }}>
      {loading ? (
        <LoadingBalls />
      ) : (
        <CardAndComments
          handleVisibilityData={handleVisibilityData}
          visibilityData={fullData}
          data={data}
        />
      )}
    </Container>
  );
}
