import { Input } from "../ui/input";
import { Search } from "lucide-react";

export function SearchBarUsers() {
  return (
    <>
      <Search
        size={18}
        strokeWidth={1.8}
        className="absolute  !mt-8 !text-slate-500 pointer-events-none"
        aria-hidden
      />

      <Input
        type="text"
        placeholder="Cerca un utente..."
        className="!pl-10 !h-10  !mt-5 !rounded-lg !bg-white shadow-sm"
      />
    </>
  );
}

export function SearchBarBooks() {
  return (
    <div className="!mt-5">
      <Search
        size={18}
        strokeWidth={1.8}
        className="absolute !ml-53 !mt-3 !text-slate-500 pointer-events-none"
        aria-hidden
      />

      <Input
        type="text"
        placeholder="Cerca un libro..."
        className="!pl-10 !h-10 !ml-50 !rounded-lg !bg-white shadow-sm"
      />
    </div>
  );
}

export default SearchBarUsers;
SearchBarBooks;
