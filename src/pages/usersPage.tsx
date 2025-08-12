import Menu from "../components/myComponents/primaryMenu";
import { SearchBarUsers } from "../components/myComponents/search";
import { MyFilter } from "../components/myComponents/filter";
import { AddUser } from "@/components/myComponents/add";
import { UserCard } from "@/components/myComponents/cardlist";

export function UserPage() {
  return (
    <>
      <div className="flex flex-row">
        <div>
          <Menu />
        </div>
        <div>
          <SearchBarUsers />
        </div>
        <div>
          <MyFilter />
        </div>
        <div>
          <AddUser />
        </div>
      </div>
      <div className="!justify-center !flex">
        <UserCard />
      </div>
    </>
  );
}
