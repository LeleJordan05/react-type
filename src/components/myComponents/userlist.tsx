import { useUsers } from "@/hooks/useUsers";
import { UserCard } from "@/components/myComponents/cardlist";
import { UserCardSkeleton } from "./usercardskeleton";

export function UserList() {
  const { data: users, isLoading } = useUsers();

  if (isLoading) {
    return (
      <div
        className="w-270
           rounded-lg grid gap-4"
      >
        {Array.from({ length: 35 }).map((_, i) => (
          <UserCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {users?.map((user: any) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
