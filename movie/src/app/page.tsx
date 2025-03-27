"use client";
import { useState, useEffect, Suspense } from "react";
import axios from "axios";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { MoviesList } from "@/components/MoviesList";
import { ScrollPoster } from "@/components/ScrollPoster";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

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
    <Suspense fallback={<Skeleton />}>
      <Navigation />
      {/* carousel */}
      <div>
        <Carousel className="relative">
          <CarouselContent>
            {data?.slice(0, 3).map((value: any, index: number) => {
              return (
                <CarouselItem
                  key={value.id || index}
                  className="flex items-center w-full h-200 overflow-hidden">
                  <ScrollPoster
                    imageLink={value.backdrop_path}
                    rating={value.vote_average}
                    movieName={value.original_title}
                    overview={value.overview}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-10 top-[50%]" />
          <CarouselNext className="absolute right-10 top-[50%]" />
        </Carousel>
      </div>
      <main className="w-full h-fit flex flex-col gap-8 px-20">
        <MoviesList
          listStatus="upcoming"
          listStatusName="Upcoming"
          tav={false}
          pageNo={"1"}
        />
        <MoviesList
          listStatus="popular"
          listStatusName="Popular"
          tav={false}
          pageNo={"1"}
        />
        <MoviesList
          listStatus="top_rated"
          listStatusName="Top rated"
          tav={false}
          pageNo={"1"}
        />
      </main>

      <Footer />
    </Suspense>
  );
}
