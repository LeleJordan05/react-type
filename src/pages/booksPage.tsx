import { useState } from "react";
import { AddBook } from "@/components/myComponents/add";
import Menu from "@/components/myComponents/primaryMenu";
import { SearchBarBooks } from "@/components/myComponents/search";
import { BookList } from "@/components/myComponents/bookslist";

export function BookPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <>
      <div className="flex flex-row justify-between mb-12">
        <div>
          <Menu />
        </div>
        <div className="w-120">
          <SearchBarBooks value={searchQuery} onChange={setSearchQuery} />
        </div>
        <div>
          <AddBook />
        </div>
      </div>
      <div className="justify-center flex">
        <BookList searchQuery={searchQuery} />
      </div>
    </>
  );
}
