import { AddBook } from "@/components/myComponents/add";
import Menu from "@/components/myComponents/primaryMenu";
import { SearchBarBooks } from "@/components/myComponents/search";
import { BookList } from "@/components/myComponents/bookslist";

export function BookPage() {
  return (
    <>
      <div className="flex flex-row justify-between mb-12">
        <div>
          <Menu />
        </div>
        <div className="w-120">
          <SearchBarBooks />
        </div>
        <div>
          <AddBook />
        </div>
      </div>
      <div className="justify-center flex">
        <BookList />
      </div>
    </>
  );
}
