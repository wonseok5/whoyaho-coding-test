import { BaseAPI } from ".";

export type SaveArticleBodyDto = {
  title: string;
  content: string;
};

export type GetArticlesQueryDto = {
  limit: number;
  lastId: number;
};

export type Category = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type Article = {
  id: number;
  title: string;
  content: string;
  UserId: number;
  createdAt: string;
  updatedAt: string;
  Category: Category;
};
export type GetArticlesResponse = {
  articles: Article[];
};
export class ArticlesApiHandler extends BaseAPI {
  URL = "/articles";

  saveArticle(body: SaveArticleBodyDto) {
    return this.post<{}, SaveArticleBodyDto>({ endPoint: "/", body });
  }

  getArticles(params: GetArticlesQueryDto) {
    return this.get<GetArticlesResponse>({ endPoint: "/articles", params });
  }
}

export const ArticlesApi = new ArticlesApiHandler();
