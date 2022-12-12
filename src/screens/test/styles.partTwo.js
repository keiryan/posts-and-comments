import styled from "styled-components";

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