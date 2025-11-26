import { useBooks } from "@/hooks/useBooks";
import { BookCard } from "@/components/myComponents/cardlist";
import { Book } from "@/types/Book";
import "@/index.css";
import { BookCardSkeleton } from "./bookcardskeleton";

type BookListProps = {
  searchQuery?: string;
}

export function BookList({ searchQuery = "" }: BookListProps) {
  const { data: books, isLoading } = useBooks();

  if (isLoading) {
    return (
      <div
        className="grid gap-4"
      >
        {Array.from({ length: 35 }).map((_, i) => (
          <BookCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  const normalizedQuery = searchQuery.trim();

  const escapeRegex = (value: string) =>
    value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const boundaryRegex = normalizedQuery
    ? new RegExp(`\\b${escapeRegex(normalizedQuery)}`, "i")
    : null;

  const filteredBooks = boundaryRegex
    ? books?.filter((book: Book) =>
        [book.name, book.description, book.id]
          .some((field) => boundaryRegex.test(String(field)))
      )
    : books;

  return (
    <div className="grid gap-4">
      {filteredBooks?.map((book: Book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
