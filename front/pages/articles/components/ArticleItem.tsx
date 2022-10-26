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
  box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.2);
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div:nth-child(2) {
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
      padding: 1rem;
      border-radius: 999px;
    }
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
      <div>
        <div>(id: {article.id})</div>
        {article.Category.name && <div>{article.Category.name}</div>}
      </div>
      <h4>{article.title}</h4>
      <p>{article.content}</p>
    </Container>
  );
};

export default ArticleItem;
