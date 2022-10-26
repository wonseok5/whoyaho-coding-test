import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";

interface Props {
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  title: string;
}
const TitleInput: FC<Props> = ({ title, onChangeTitle }) => {
  return (
    <Container>
      <label>
        <span>제목</span>
        <input value={title} onChange={onChangeTitle} />
      </label>
    </Container>
  );
};

const Container = styled.div`
  & label {
    display: flex;
    flex-direction: column;
    & span {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    & input {
      padding: 1rem;
    }
  }
`;

export default TitleInput;
