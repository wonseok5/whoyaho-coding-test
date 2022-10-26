import React, { FC } from "react";
import { Article } from "../../../apis/articles";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 0.5rem;
  border-radius: 1rem;
  & div {
  }
  & h4 {
    margin: 0.5rem;
  }
  & p {
    margin-top: 0.1rem;
    margin: 0.5rem;
  }
`;

type Props = {
  article: Article;
};

const ArticleItem: FC<Props> = ({ article }) => {
  return (
    <Container>
      <div>({article.id})</div>
      <h4>{article.title}</h4>
      <p>{article.content}</p>
    </Container>
  );
};

export default ArticleItem;
