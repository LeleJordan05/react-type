import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchBarUsers() {
  return (
    <>
      <Search
        size={18}
        strokeWidth={1.8}
        className="absolute mt-8 ml-3 text-slate-500 pointer-events-none"
        aria-hidden
      />

      <Input
        type="text"
        placeholder="Cerca un utente..."
        className="pl-10 h-10 mt-5 rounded-lg bg-white border-none"
      />
    </>
  );
}

export function SearchBarBooks() {
  return (
    <>
      <Search
        size={18}
        strokeWidth={1.8}
        className="absolute mt-3 ml-3 text-slate-500 pointer-events-none"
        aria-hidden
      />

      <Input
        type="text"
        placeholder="Cerca un libro..."
        className="pl-10 h-10 rounded-lg bg-white border-none"
      />
    </>
  );
}

export default SearchBarUsers;
SearchBarBooks;
