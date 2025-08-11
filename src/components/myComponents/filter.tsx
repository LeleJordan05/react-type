import * as React from "react";

import { Filter } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function MyFilter() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu > 
      <DropdownMenuTrigger
        asChild
        className="!dot-primary-color hover:!text-white flex justify-center items-center"
      >
        <Button variant={"outline"} size="default" className="filter" >
          <Filter/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="!w-40">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">All</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">
            Users with books
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">
            Users without books
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}