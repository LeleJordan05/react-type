import { AddBook } from "@/components/myComponents/add";
import Menu from "../components/myComponents/primaryMenu";
import { SearchBarBooks } from "../components/myComponents/search";
import { BookCard } from "@/components/myComponents/cardlist";

export function BookPage() {
  return (
    <>
      <div className="flex flex-row">
        <div>
          <Menu />
        </div>
        <div>
          <SearchBarBooks />
        </div>
        <div className="!ml-145">
          <AddBook />
        </div>
      </div>
      <div className="!justify-center !flex">
        <BookCard />
      </div>
    </>
  );
}
