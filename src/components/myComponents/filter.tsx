import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type FilterOption = "all" | "withBooks" | "withoutBooks";

type MyFilterProps = {
  filterValue: FilterOption;
  onFilterChange: (value: FilterOption) => void;
};

export function MyFilter({ filterValue, onFilterChange }: MyFilterProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="dot-primary-color hover:text-white flex justify-center items-center"
      >
        <Button
          variant={"outline"}
          size="default"
          className="filter px-4 py-2 h-10 w-10 flex justify-center items-center"
        >
          <Filter />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 rounded-xl border-2 border-foreground/20 shadow-lg">
        <DropdownMenuRadioGroup value={filterValue} onValueChange={(value) => onFilterChange(value as FilterOption)}>
          <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="withBooks">
            Users with books
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="withoutBooks">
            Users without books
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
