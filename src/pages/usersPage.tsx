import Menu from "../components/myComponents/primaryMenu";
import { SearchBarUsers } from "../components/myComponents/search";
import { MyFilter } from "../components/myComponents/filter";
import { AddUser } from "@/components/myComponents/add";
import { UserList } from "@/components/myComponents/userlist";

export function UserPage() {
  return (
    <>
      <div className="!flex !flex-row !justify-between">
        <div>
          <Menu />
        </div>
        <div className="!w-120">
          <SearchBarUsers />
        </div>
        <div className="!flex !flex-row">
          <MyFilter />
          <AddUser />
        </div>
      </div>

      <div className="!justify-center !flex">
        <UserList />
      </div>
    </>
  );
}
