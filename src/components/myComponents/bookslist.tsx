import { useArticles } from "@/hooks/useArticles";
import { BookCard } from "./cardlist";

export function BookList() {
  const { data: books, isLoading } = useArticles();

  if (isLoading) return <p>Caricamento libri...</p>;

  return (
    <div className="card grid gap-4">
      {books?.map((book: any) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
