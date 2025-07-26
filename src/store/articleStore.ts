import { create } from "zustand";
import { Article } from "../types/Article";

interface ArticleState{
    articles : Article[],
    setArticles: (articles : Article[]) => void,
    addArticle: (article : Article) => void,
    updateArticle : (id:string, data: Partial<Article>) => void,
    removeArticle : (id:string) => void,
}

export const useArticleStore = create<ArticleState>((set) => ({
    articles: [],
    setArticles: (articles) => set({articles}),
    addArticle: (article) => set((state) => ({articles: [...state.articles, article]})),
    updateArticle: (id, data) => 
        set((state) => ({
            articles: state.articles.map((a) => (a.id === id) ? {...a, ...data} : a),
        })),
    removeArticle: (id) => set((state) => ({
        articles: state.articles.filter((a) => a.id !== id)
    }))
}))