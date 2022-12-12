import styled from "styled-components";
import { Link } from "react-router-dom";

export const Base = styled.div`
  display: flex;
`;

export const Container = styled(Base)`
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  background-color: rgb(20, 20, 20);
  overflow: auto;
  padding: 20px 0;
`;

export const IconContainer = styled(Base)`
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px;
  border-radius: 4px 0 0 4px;
  :hover {
    cursor: pointer;
  }
`;

export const InputContainer = styled(Base)`
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 4px;
  padding-right: 4px;
  width: 300px;
`;

export const StyledInput = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 14px;
  width: 100%;
`;

export const NoResults = styled.div`
  font-size: 20px;
  color: #fff;
  margin: auto 0;
`;

export function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
    </svg>
  );
}

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(20, 20, 20);
  padding: 1rem;
  gap: 1rem;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
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

export const StyledNavLink = styled(Link)`
  display: flex;
  max-width: 50%;
  justify-content: center;
  text-decoration: none;
  color: #000;
`;
