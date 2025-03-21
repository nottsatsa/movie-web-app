"use client";
import { useState, useEffect } from "react";
import axios from "axios";

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
import { ScrollPoster } from "@/components/ScrollPoster";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
          },
        }
      )
      .then((res) => setData(res.data.results));
  }, []);

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
            <Input className="border-0 " />
          </div>
        </div>

        <Button variant="outline">
          <MdOutlineDarkMode />
        </Button>
      </nav>
      {/* carousel */}
      <div>
        <Carousel className="relative">
          <CarouselContent>
            {data?.slice(0, 3).map((value: any, index: any) => {
              return (
                <CarouselItem className="flex items-center w-full h-200 overflow-hidden">
                  <ScrollPoster
                    key={index}
                    imageLink={value.backdrop_path}
                    rating={value.vote_average}
                    movieName={value.original_title}
                    overview={value.overview}
                  />{" "}
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-10 top-[50%]" />
          <CarouselNext className="absolute right-10 top-[50%]" />
        </Carousel>
      </div>
      <main className="w-full h-fit flex flex-col gap-8">
        <MoviesList listStatus="upcoming" listStatusName="Upcoming" />
        <MoviesList listStatus="popular" listStatusName="Popular" />
        <MoviesList listStatus="top_rated" listStatusName="Top rated" />
      </main>
      <footer className="w-full h-fit py-10 flex flex-col items-start justify-center bg-indigo-700">
        <div className="w-full flex md:flex-row flex-col justify-between lg:px-10">
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
