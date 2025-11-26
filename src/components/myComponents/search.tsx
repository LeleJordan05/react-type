import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function SearchBarUsers({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <>
      <Search
        size={18}
        strokeWidth={1.8}
        className="absolute lg:mt-8 md:mt-8 ml-3 mt-5 text-slate-500 pointer-events-none"
        aria-hidden
      />

      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? "Cerca un utente..."}
        className=" h-10 lg:mt-5 md:mt-5 mt-2 pl-10 rounded-lg bg-white border-none"
      />
    </>
  );
}

export function SearchBarBooks({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <>
      <Search
        size={18}
        strokeWidth={1.8}
        className="absolute lg:mt-8 md:mt-8 ml-3 mt-5 text-slate-500 pointer-events-none"
        aria-hidden
      />

      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? "Cerca un libro..."}
        className="pl-10 h-10 md:mt-5 mt-2 rounded-lg bg-white border-none"
      />
    </>
  );
}

export default SearchBarUsers;
