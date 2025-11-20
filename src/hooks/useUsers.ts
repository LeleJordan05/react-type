import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Api } from "@/api/Api";
import { CreateUserPayload, UpdateUserPayload } from "@/types/User";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: Api.getUsers,
  });
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateUserPayload) => Api.createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateUserPayload }) =>
      Api.updateUser(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => Api.deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
