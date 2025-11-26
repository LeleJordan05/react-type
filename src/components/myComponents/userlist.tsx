import { useUsers } from "@/hooks/useUsers";
import { useBooks } from "@/hooks/useBooks";
import { UserCard } from "@/components/myComponents/cardlist";
import { UserCardSkeleton } from "./usercardskeleton";
import { User } from "@/types/User";
import { Book } from "@/types/Book";

type FilterOption = "all" | "withBooks" | "withoutBooks";

type UserListProps = {
  filterValue: FilterOption;
  searchQuery?: string;
};

export function UserList({ filterValue, searchQuery = "" }: UserListProps) {
  const { data: users, isLoading: usersLoading } = useUsers();
  const { data: books, isLoading: booksLoading } = useBooks();

  if (usersLoading || booksLoading) {
    return (
      <div
        className="grid gap-4"
      >
        {Array.from({ length: 35 }).map((_, i) => (
          <UserCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  // Filter users based on the selected filter
  const normalizedQuery = searchQuery.trim();
  const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const boundaryRegex = normalizedQuery ? new RegExp(`\\b${escapeRegex(normalizedQuery)}`, "i") : null;

  const filteredUsers = users?.filter((user: User) => {
    if (filterValue === "all") {
      // continue; fall through to text search below
    }
    
    // Check if user has books by looking at books with matching sellerId
    const userHasBooks = books?.some((book: Book) => book.sellerId === user.id) || false;
    
    if (filterValue === "withBooks") {
      return userHasBooks;
    }
    
    if (filterValue === "withoutBooks") {
      return !userHasBooks;
    }
    
    return true;
  }) || [];

  
  const searchedUsers = boundaryRegex
    ? filteredUsers.filter((user: User) =>
        [user.name, user.id]
          .some((field) => boundaryRegex.test(String(field)))
      )
    : filteredUsers;

  return (
    <div className="grid gap-4">
      {searchedUsers.map((user: User) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
