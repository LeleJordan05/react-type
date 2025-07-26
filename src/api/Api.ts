import { CreateArticlePayload, UpdateArticlePayload } from "../types/Article";
import { CreateUserPayload, UpdateUserPayload } from "../types/User";

const Url = "https://62c96230d9ead251e8baf02e.mockapi.io/campus";

export const Api = {
  getUsers: async () => {
    const res = await fetch(`${Url}/users`);
    if (!res.ok) throw new Error("Errore nel recupero utenti");
    return res.json();
  },

  createUser: async (data: CreateUserPayload) => {
    const res = await fetch(`${Url}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Errore nella creazione utente");
    return res.json();
  },

  updateUser: async (id: string, data: UpdateUserPayload) => {
    const res = await fetch(`${Url}/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Errore nella modifica utente");
    return res.json();
  },

  deleteUser: async (id: string) => {
    const res = await fetch(`${Url}/users/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Errore nella cancellazione utente");
  },

  getArticles: async () => {
    const res = await fetch(`${Url}/articles`);
    if (!res.ok) throw new Error("Errore nel recupero articoli");
    return res.json();
  },

  createArticle: async (data: CreateArticlePayload) => {
    const res = await fetch(`${Url}/articles`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Errore nella creazione articolo");
    return res.json();
  },

  updateArticle: async (id: string, data: UpdateArticlePayload) => {
    const res = await fetch(`${Url}/articles/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Errore nella modifica articolo");
    return res.json();
  },

  deleteArticle: async (id: string) => {
    const res = await fetch(`${Url}/articles/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Errore nella cancellazione articolo");
  },
};
