import { BsFilm } from "react-icons/bs";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineDarkMode } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocalPhone } from "react-icons/md";

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
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";

import { MoviesList } from "@/components/MoviesList";

export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-around p-4">
        <div className="flex gap-2 items-center">
          <BsFilm color="#4338CA" />
          <h6 className="text-indigo-700 font-[700] italic">Movie Z</h6>
        </div>

        <div className="flex gap-3">
          <NavigationMenu className="border border-[#E4E4E7] rounded-md">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2.5 h-fit border border-[#E4E4E7] pr-3 pl-3 rounded-lg">
            <HiMagnifyingGlass />
            <Input className="border-0" />
          </div>
        </div>

        <Button variant="outline">
          <MdOutlineDarkMode />
        </Button>
      </nav>
      <div>
        <Carousel className="relative">
          <CarouselContent>
            <CarouselItem className="flex items-center w-full h-200 overflow-hidden">
              <img
                className="justify-center w-full"
                src="https://s3-alpha-sig.figma.com/img/c78e/5e57/16d36abbdaa8df480db189d5729e384a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mLG2xOJZNT2vGCrvhDwo3-iKl0QLHOJCxUbykqD81OWYT61RDmWH~sY5qc4qVMmDHRoLdT3VXAnqpxjl4QRY7lvqwtvVTj2-RScRPADrSRE2X1dKJ6MNwI89GQsAr7CVA~Sw886s4cN3GzZCxbhX6nG5wCcsdExQ3ZifH-DrPK1y2qNpWDmJzamRmYUQB4G5gKUvdNeqjPEES5nuyWmp4tVWbJDWV1Ve6DECdtwn6WwE~0puD445Fe7qQpsvTO15bYmHP3E7sN6ZamI~BBe1H7Aisb1JjhHE35MH~r0CHClF6Ayy8aDTsnbuKYmE-rzkB3IlXZLoaZaJNRHFDc~Erg__"
                alt="wicked"
              />
            </CarouselItem>
            <CarouselItem className="flex items-center w-full h-200 overflow-hidden">
              <img
                className="w-full"
                src="https://s3-alpha-sig.figma.com/img/c78e/5e57/16d36abbdaa8df480db189d5729e384a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mLG2xOJZNT2vGCrvhDwo3-iKl0QLHOJCxUbykqD81OWYT61RDmWH~sY5qc4qVMmDHRoLdT3VXAnqpxjl4QRY7lvqwtvVTj2-RScRPADrSRE2X1dKJ6MNwI89GQsAr7CVA~Sw886s4cN3GzZCxbhX6nG5wCcsdExQ3ZifH-DrPK1y2qNpWDmJzamRmYUQB4G5gKUvdNeqjPEES5nuyWmp4tVWbJDWV1Ve6DECdtwn6WwE~0puD445Fe7qQpsvTO15bYmHP3E7sN6ZamI~BBe1H7Aisb1JjhHE35MH~r0CHClF6Ayy8aDTsnbuKYmE-rzkB3IlXZLoaZaJNRHFDc~Erg__"
                alt="wicked"
              />
            </CarouselItem>
            <CarouselItem className="flex items-center w-full h-200 overflow-hidden">
              {" "}
              <img
                className="w-full"
                src="https://s3-alpha-sig.figma.com/img/c78e/5e57/16d36abbdaa8df480db189d5729e384a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mLG2xOJZNT2vGCrvhDwo3-iKl0QLHOJCxUbykqD81OWYT61RDmWH~sY5qc4qVMmDHRoLdT3VXAnqpxjl4QRY7lvqwtvVTj2-RScRPADrSRE2X1dKJ6MNwI89GQsAr7CVA~Sw886s4cN3GzZCxbhX6nG5wCcsdExQ3ZifH-DrPK1y2qNpWDmJzamRmYUQB4G5gKUvdNeqjPEES5nuyWmp4tVWbJDWV1Ve6DECdtwn6WwE~0puD445Fe7qQpsvTO15bYmHP3E7sN6ZamI~BBe1H7Aisb1JjhHE35MH~r0CHClF6Ayy8aDTsnbuKYmE-rzkB3IlXZLoaZaJNRHFDc~Erg__"
                alt="wicked"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-10 top-[50%]" />
          <CarouselNext className="absolute right-10 top-[50%]" />
        </Carousel>
      </div>
      <main className="w-full h-fit flex flex-col gap-8">
        <MoviesList listStatus="Upcoming" />
        <MoviesList listStatus="Popular" />
        <MoviesList listStatus="Top rated" />
      </main>
      <footer className="w-full h-fit py-10 flex flex-col items-start bg-indigo-700">
        <div className="w-full flex md:flex-row flex-col justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <BsFilm color="#FAFAFA" />
              <h6 className="text-[#FAFAFA] font-[700] italic">Movie Z</h6>
            </div>
            <p className="text-sm font-[400] text-[#FAFAFA]">
              © 2024 Movie Z. All Rights Reserved.
            </p>
          </div>
          <div className="flex flex-row justify-end items-start">
            <div className="flex flex-col h-50 items-start gap-3">
              <p className=" text-sm font-[400] text-[#FAFAFA]">
                Contact Information
              </p>
              <div className="flex flex-col items-start gap-6">
                <div className="flex items-center gap-3">
                  <HiOutlineMail size={16} color="#FAFAFA" />
                  <div className="flex flex-col">
                    <p className="text-sm text-[#fafafa] font-[500]">Email:</p>
                    <p className="text-sm text-[#fafafa] font-[400]">
                      support@movieZ.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MdOutlineLocalPhone size={16} color="#FAFAFA" />
                  <div className="flex flex-col">
                    <p className="text-sm text-[#fafafa] font-[500]">Phone:</p>
                    <p className="text-sm text-[#fafafa] font-[400]">
                      +976 (11) 123-4567
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <p className="text-sm font-[400] text-[#fafafa]">Follow us </p>
              <div className="flex sm:flex-row flex-col items-center gap-3 text-[#fafafa] text-sm font-[500]">
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>Youtube</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
