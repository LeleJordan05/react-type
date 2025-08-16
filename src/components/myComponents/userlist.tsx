import { useUsers } from "@/hooks/useUsers";
import { UserCard } from "./cardlist";

export function UserList() {
  const { data: users, isLoading } = useUsers();

  if (isLoading) return <p>Caricamento utenti...</p>;

  return (
    <div className="card grid gap-4">
      {users?.map((user: any) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
