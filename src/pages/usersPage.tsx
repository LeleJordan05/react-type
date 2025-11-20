import { useState } from "react";
import Menu from "@/components/myComponents/primaryMenu";
import { SearchBarUsers } from "@/components/myComponents/search";
import { MyFilter } from "@/components/myComponents/filter";
import { AddUser } from "@/components/myComponents/add";
import { UserList } from "@/components/myComponents/userlist";

type FilterOption = "all" | "withBooks" | "withoutBooks";

export function UserPage() {
  const [filterValue, setFilterValue] = useState<FilterOption>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <>
      <div className="flex flex-col mb-5 lg:flex-row md:flex md:flex-row justify-between items-center lg:mb-12 ">
        <div>
          <Menu />
        </div>
        <div className="lg:w-120 md:w-80 w-70">
          <SearchBarUsers value={searchQuery} onChange={setSearchQuery} />
        </div>
        <div className="flex flex-row">
          <MyFilter 
            filterValue={filterValue} 
            onFilterChange={setFilterValue} 
          />
          <AddUser />
        </div>
      </div>

      <div className="justify-center flex">
        <UserList filterValue={filterValue} searchQuery={searchQuery} />
      </div>
    </>
  );
}
