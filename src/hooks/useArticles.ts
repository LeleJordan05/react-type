import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateArticlePayload, UpdateArticlePayload } from "../types/Article";
import { Api } from "../api/Api";
import { useArticleStore } from "../store/articleStore";
import { useEffect } from "react";

export function useArticles() {
  const setArticles = useArticleStore((state) => state.setArticles);

  const query = useQuery({
    queryKey: ["articles"],
    queryFn: Api.getArticles,
  });

  useEffect(() => {
    if (query.data) {
      setArticles(query.data);
    }
  }, [query.data]);

  return query;
}

export function useCreateArticle() {
  const queryClient = useQueryClient();
  const addArticle = useArticleStore((state) => state.addArticle);

  return useMutation({
    mutationFn: (data: CreateArticlePayload) => Api.createArticle(data),
    onSuccess: (newArticle) => {
      queryClient.invalidateQueries({ queryKey: ["articles"] }),
        addArticle(newArticle);
    },
  });
}

export function useUpdateArticle() {
  const queryClient = useQueryClient();
  const updateArticle = useArticleStore((state) => state.updateArticle);

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateArticlePayload }) =>
      Api.updateArticle(id, data),
    onSuccess: (updatedArticle) => {
      queryClient.invalidateQueries({ queryKey: ["articles"] }),
        updateArticle(updatedArticle.id, updatedArticle);
    },
  });
}

export function useDeleteArticle() {
  const queryClient = useQueryClient();
  const removeArticle = useArticleStore((state) => state.removeArticle);

  return useMutation({
    mutationFn: (id: string) => Api.deleteArticle(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ["articles"] }),
        removeArticle(id);
    },
  });
}
