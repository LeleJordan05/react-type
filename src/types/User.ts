export interface  User {
    id: string;
    name: string;
    avatar : string;
    birthdate : string;
    createdAt: string;
    articlesIds: string[];
}

export type CreateUserPayload = Omit<User, 'id' | 'createdAt' | 'articlesIds'>;
export type UpdateUserPayload = Partial<CreateUserPayload>;