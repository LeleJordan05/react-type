import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Api } from "../api/Api";
import { CreateUserPayload, UpdateUserPayload } from "../types/User";
import { useUserStore } from "../store/userStore";
import { useEffect } from "react";

export function useUsers() {
  const setUsers = useUserStore((state) => state.setUsers);

  const query = useQuery({
    queryKey: ["users"],
    queryFn: Api.getUsers,
  });

  useEffect(() => {
    if (query.data) {
      setUsers(query.data);
    }
  }, [query.data]);

  return query;
}

export function useCreateUser() {
  const queryClient = useQueryClient();
  const addUser = useUserStore((state) => state.addUser);

  return useMutation({
    mutationFn: (data: CreateUserPayload) => Api.createUser(data),
    onSuccess: (newUser) => {
      queryClient.invalidateQueries({ queryKey: ["users"] }), addUser(newUser);
    },
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const updateUser = useUserStore((state) => state.updateUser);

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateUserPayload }) =>
      Api.updateUser(id, data),
    onSuccess: (updatedUser) => {
      queryClient.invalidateQueries({ queryKey: ["users"] }),
        updateUser(updatedUser.id, updatedUser);
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();
  const removeUser = useUserStore((state) => state.removeUser);

  return useMutation({
    mutationFn: (id: string) => Api.deleteUser(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ["users"] }), removeUser(id);
    },
  });
}
