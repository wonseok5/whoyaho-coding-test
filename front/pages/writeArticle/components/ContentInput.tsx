import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.7rem;
  margin-bottom: 1rem;
  & label {
    display: flex;
    flex-direction: column;
    & > span {
      font-size: 1rem;
      margin-bottom: 0.4rem;
    }
    & > textarea {
      padding: 1rem;
    }
  }
`;

type Props = {
  onChangeContent: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  content: string;
};
const ContentInput: FC<Props> = ({ content, onChangeContent }) => {
  return (
    <Container>
      <label>
        <span>본문</span>
        <textarea rows={20} value={content} onChange={onChangeContent} />
      </label>
    </Container>
  );
};

export default ContentInput;
