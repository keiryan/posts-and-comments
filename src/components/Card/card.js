import {
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
} from "./styles.card";

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

export default function CardGallery({ posts }) {
  return (
    <GalleryContainer>
      {posts.map((post) => (
        <CardComponent
          key={post.id}
          title={post.title}
          id={post.id}
          body={post.body}
        />
      ))}
    </GalleryContainer>
  );
}
