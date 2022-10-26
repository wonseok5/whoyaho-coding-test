import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Article, ArticlesApi } from "../../apis/articles";
import Layout from "../../components/Layout";
import { DefaultButtonColor } from "../../styles/styledCss";
import ArticleItem from "./components/ArticleItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const LoadMore = styled.button`
  ${DefaultButtonColor}
  align-self: center;
  padding: 1rem 3rem;
  margin-top: 3rem;
  cursor: pointer;
`;
const ArticlesPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const getArticles = useCallback(async (limit: number, lastId: number) => {
    const { articles } = await ArticlesApi.getArticles({
      limit,
      lastId,
    });
    setArticles((prev) => [...prev, ...articles]);
  }, []);
  const loadMore = useCallback(async () => {
    await getArticles(10, articles[articles.length - 1].id);
  }, [articles, getArticles]);
  useEffect(() => {
    (async () => {
      await getArticles(10, 0);
    })();
  }, []);
  return (
    <Layout>
      <Container>
        {articles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
        <LoadMore onClick={loadMore}>더 불러오기</LoadMore>
      </Container>
    </Layout>
  );
};

export default ArticlesPage;
