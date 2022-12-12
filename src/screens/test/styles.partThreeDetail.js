import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(20, 20, 20);
  padding: 20px 0;
  overflow: auto;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  width: 50%;
  min-width: 300px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SVG = styled.svg`
  min-width: 24px;
`;

export const UserId = styled.div``;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50%;
`;

export const CardText = styled.div``;

export const ChevronContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  transition: 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CardAndBodyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TransitionProps = styled.div``;

export const StyledComment = styled.div`
  display: flex;
  max-height: ${(props) => (props.visible.visible ? "1000px" : "40px")};
  background-color: #fff;
  flex-direction: column;
  width: 50%;
  margin: 4px;
  padding: 12px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  position: relative;
`;

const AnimatedText = styled.div`
  transition: all 0.2s ease-in-out;
`;

export const CommentBody = styled(AnimatedText)`
  opacity: ${(props) => (props.visible.visible ? "1" : "0")};
  transform: ${(props) =>
    props.visible.visible ? "translateY(0px)" : "translateY(-100%)"};
    max-width: 90%;
`;

export const CommentEmail = styled(AnimatedText)`
  opacity: ${(props) => (props.visible.visible ? "1" : "0")};
  transform: ${(props) =>
    props.visible.visible ? "translateY(0px)" : "translateY(-100%)"};
  font-weight: bold;
`;

export const CardAndCommentContainer = styled(Comment)``;

export const VisibilityIconContainer = styled.div`
position: absolute;
bottom: 0;
right: 0;
  padding: 8px;
  :hover {
    cursor: pointer;
  }
`;

export function Chevron() {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#fff"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"></path>
    </SVG>
  );
}

export function UserIcon() {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 0H24V24H0z"></path>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.35 18.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5s-3.34-.56-4.65-1.5zm10.79-1.38a9.947 9.947 0 00-12.28 0A7.957 7.957 0 014 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12z"></path>
      <path d="M12 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 13 12 13s3.5-1.57 3.5-3.5S13.93 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"></path>
    </SVG>
  );
}

export function ToggleVisibility() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
      ></path>
      <path d="M12 6a9.77 9.77 0 018.82 5.5 9.647 9.647 0 01-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 001 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 01-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 00-.36 1.78 4.507 4.507 0 006.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 01-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z"></path>
    </svg>
  );
}
