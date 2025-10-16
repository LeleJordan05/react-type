import { useUsers } from "@/hooks/useUsers";
import { UserCard } from "@/components/myComponents/cardlist";
import { UserCardSkeleton } from "./usercardskeleton";

export function UserList() {
  const { data: users, isLoading } = useUsers();

  if (isLoading) {
    return (
      <div
        className="w-full sm:w-4/5 lg:w-3/4
            h-auto sm:h-24
            mx-auto 
            mt-10 sm:mt-14 grid gap-4"
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
