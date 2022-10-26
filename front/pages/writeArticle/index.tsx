import React, { ChangeEvent, useCallback, useState } from "react";
import {
  ArticlesApi,
  ArticlesApiHandler,
  SaveArticleBodyDto,
} from "../../apis/articles";
import Layout from "../../components/Layout";
import ContentInput from "./components/ContentInput";
import TitleInput from "./components/TitleInput";
import styled from "styled-components";
import { DefaultButtonColor } from "../../styles/styledCss";
import { useRouter } from "next/router";

const SubmitButton = styled.button`
  ${DefaultButtonColor}
  padding: 1rem;
  border-radius: 1rem;
`;

const WriteArticlePage = () => {
  const router = useRouter();
  const [articleBody, setArticleBody] = useState<SaveArticleBodyDto>({
    title: "",
    content: "",
  });
  const onChangeText = useCallback(
    (type: "title" | "content") => (e: ChangeEvent<HTMLElement>) => {
      if (type === "title") {
        const target = e.target as HTMLInputElement;
        setArticleBody((prev) => ({ ...prev, title: target.value }));
      } else {
        const target = e.target as HTMLTextAreaElement;
        setArticleBody((prev) => ({ ...prev, content: target.value }));
      }
    },
    []
  );
  const onSubmit = useCallback(async () => {
    try {
      await ArticlesApi.saveArticle(articleBody);
      router.push("/");
    } catch (error) {
      alert("포스팅 실패");
    }
  }, [articleBody, router]);
  return (
    <Layout>
      <TitleInput
        title={articleBody.title}
        onChangeTitle={onChangeText("title")}
      />
      <ContentInput
        content={articleBody.content}
        onChangeContent={onChangeText("content")}
      />
      <SubmitButton onClick={onSubmit}>포스팅</SubmitButton>
    </Layout>
  );
};

export default WriteArticlePage;
