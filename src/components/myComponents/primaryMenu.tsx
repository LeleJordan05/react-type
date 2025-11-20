import { useNavigate, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <NavigationMenu className="lg:ml-30 md:ml-10 ml-5 mt-5">
      <NavigationMenuList className="menu-list">
        <NavigationMenuItem>
          <NavigationMenuTrigger
            onClick={() => navigate("/utenti")}
            className={`
              cursor-pointer py-1 transition-all duration-300 ease-in-out
              relative overflow-hidden group
              hover:text-blue-600 hover:scale-105 
              ${
                isActive("/utenti")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }
            `}
          >
            Utenti
            <span
              className={`
                absolute bottom-0 left-0 h-0.5 bg-blue-600 
                ${isActive("/utenti") ? "w-full" : "w-0 "}
              `}
            />
          </NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            onClick={() => navigate("/libri")}
            className={`
              cursor-pointer py-1 transition-all duration-300 ease-in-out
              relative overflow-hidden group
              hover:text-blue-600 hover:scale-105 
              ${
                isActive("/libri")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }
            `}
          >
            Libri
            <span
              className={`
                absolute bottom-0 left-0 h-0.5 bg-blue-600 
                ${isActive("/libri") ? "w-full" : "w-0 "}
              `}
            />
          </NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
