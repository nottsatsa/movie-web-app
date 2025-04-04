import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { BsFilm } from "react-icons/bs";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MdOutlineDarkMode } from "react-icons/md";
import { Autocomplete } from "@/components/Autocomplete";

export const Navigation = ({}) => {
  const genres = [
    { value: "action", label: "Action" },
    { value: "adventure", label: "Adventure" },
    { value: "animation", label: "Animation" },
    { value: "biography", label: "Biography" },
    { value: "comedy", label: "Comedy" },
    { value: "crime", label: "Crime" },
    { value: "documentary", label: "Documentary" },
    { value: "drama", label: "Drama" },
    { value: "family", label: "Family" },
    { value: "fantasy", label: "Fantasy" },
    { value: "film-noir", label: "Film-Noir" },
    { value: "game-show", label: "Game-Show" },
    { value: "history", label: "History" },
    { value: "horror", label: "Horror" },
    { value: "music", label: "Music" },
    { value: "musical", label: "Musical" },
    { value: "mystery", label: "Mystery" },
    { value: "news", label: "News" },
    { value: "reality-tv", label: "Reality-TV" },
    { value: "romance", label: "Romance" },
    { value: "sci-fi", label: "Sci-Fi" },
    { value: "short", label: "Short" },
    { value: "sport", label: "Sport" },
    { value: "talk-show", label: "Talk-Show" },
    { value: "thriller", label: "Thriller" },
    { value: "war", label: "War" },
    { value: "western", label: "Western" },
  ];

  return (
    <nav className="flex items-center justify-around p-4">
      <a className="flex gap-2 items-center " href="http://localhost:3000/">
        <BsFilm color="#4338CA" />
        <h6 className="text-indigo-700 font-[700] italic">Movie Z</h6>
      </a>

      <div className="flex gap-3">
        <NavigationMenu className="border border-[#E4E4E7] rounded-md">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Genre</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Autocomplete options={genres}></Autocomplete>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2.5 h-fit border border-[#E4E4E7] pr-3 pl-3 rounded-lg">
          <HiMagnifyingGlass />
          <Input className="border-0 " />
        </div>
      </div>

      <Button variant="outline">
        <MdOutlineDarkMode />
      </Button>
    </nav>
  );
};
