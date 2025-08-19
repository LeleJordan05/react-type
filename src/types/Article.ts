export interface Article {
  id: string;
  name: string;
  picture: string;
  description: string;
  sellerId: string;
  buyUrl: string;
  createdAt: string;
}

export type CreateArticlePayload = Omit<Article, "id" | "createdAt">;
export type UpdateArticlePayload = Partial<CreateArticlePayload>;
