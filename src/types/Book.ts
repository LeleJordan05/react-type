export interface Book {
  id: string;
  name: string;
  picture: string;
  description: string;
  sellerId: string;
  buyUrl: string;
  createdAt: string;
}

export type CreateBookPayload = Omit<Book, "id" | "createdAt">;
export type UpdateBookPayload = Partial<CreateBookPayload>;
