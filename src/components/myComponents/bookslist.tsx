import { useBooks } from "@/hooks/useBooks";
import { BookCard } from "@/components/myComponents/cardlist";
import "@/index.css";
import { BookCardSkeleton } from "./bookcardskeleton";

export function BookList() {
  const { data: books, isLoading } = useBooks();

  if (isLoading) {
    return (
      <div
        className="w-270
           rounded-lg grid gap-4"
      >
        {Array.from({ length: 35 }).map((_, i) => (
          <BookCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {books?.map((book: any) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
