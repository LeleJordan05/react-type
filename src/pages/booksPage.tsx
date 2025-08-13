import { AddBook } from "@/components/myComponents/add";
import Menu from "../components/myComponents/primaryMenu";
import { SearchBarBooks } from "../components/myComponents/search";
import { BookCard } from "@/components/myComponents/cardlist";

export function BookPage() {
  return (
    <>
      <div className="!flex !flex-row !justify-between">
        <div>
          <Menu />
        </div>
        <div className="!mt-5 !w-130">
          <SearchBarBooks />
        </div>
        <div>
          <AddBook />
        </div>
      </div>
      <div className="!justify-center !flex">
        <BookCard />
      </div>
    </>
  );
}
