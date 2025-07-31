import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateArticlePayload, UpdateArticlePayload } from "../types/Article";
import { Api } from "../api/Api";

export function useArticles() {
  return useQuery({
    queryKey: ["articles"],
    queryFn: Api.getArticles,
  });
}

export function useCreateArticle() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateArticlePayload) => Api.createArticle(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });
}

export function useUpdateArticle() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateArticlePayload }) =>
      Api.updateArticle(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });
}

export function useDeleteArticle() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => Api.deleteArticle(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });
}
