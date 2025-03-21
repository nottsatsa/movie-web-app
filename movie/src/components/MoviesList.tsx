"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "./ui/button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Movie } from "./Movie";

export const MoviesList = ({ listStatus, listStatusName }: any) => {
  let hudData = [
    {
      posterLink:
        "https://www.figma.com/file/q5qusnw8G57WtQk65qYgJl/image/641528080ffbeccc1a7cdd3a5199e0755d66e253",
      rating: "6.9",
      movieName: "Dear santa",
    },
    {
      posterLink:
        "https://www.figma.com/file/q5qusnw8G57WtQk65qYgJl/image/4b087764bc03cf6c5fe844d5ce89f9658466dfef",
      rating: "9",
      movieName: "dragon",
    },
    {
      posterLink:
        "https://www.figma.com/file/q5qusnw8G57WtQk65qYgJl/image/7aa1157596c5c5026e3cccbd4a9ca91b9d63dc7a",
      rating: "6",
      movieName: "alien",
    },
    {
      posterLink:
        "https://www.figma.com/file/q5qusnw8G57WtQk65qYgJl/image/641528080ffbeccc1a7cdd3a5199e0755d66e253",
      rating: "6.9",
      movieName: "Dear santa",
    },
    {
      posterLink:
        "https://www.figma.com/file/q5qusnw8G57WtQk65qYgJl/image/4b087764bc03cf6c5fe844d5ce89f9658466dfef",
      rating: "9",
      movieName: "dragon",
    },
    {
      posterLink:
        "https://www.figma.com/file/q5qusnw8G57WtQk65qYgJl/image/7aa1157596c5c5026e3cccbd4a9ca91b9d63dc7a",
      rating: "6",
      movieName: "alien",
    },
    {
      posterLink:
        "https://www.figma.com/file/q5qusnw8G57WtQk65qYgJl/image/641528080ffbeccc1a7cdd3a5199e0755d66e253",
      rating: "6.9",
      movieName: "Dear santa",
    },
    {
      posterLink:
        "https://www.figma.com/file/q5qusnw8G57WtQk65qYgJl/image/4b087764bc03cf6c5fe844d5ce89f9658466dfef",
      rating: "9",
      movieName: "dragon",
    },
    {
      posterLink:
        "https://www.figma.com/file/q5qusnw8G57WtQk65qYgJl/image/7aa1157596c5c5026e3cccbd4a9ca91b9d63dc7a",
      rating: "6",
      movieName: "alien",
    },
    {
      posterLink:
        "https://www.figma.com/file/q5qusnw8G57WtQk65qYgJl/image/641528080ffbeccc1a7cdd3a5199e0755d66e253",
      rating: "6.9",
      movieName: "Dear santa",
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    // asynchronous код давхар гүйцэтгэгдэх боломжтой болно.
    // const fetchData = async () => {
    // Алдаа гарахад try-catch ашиглан барьж, алдааны мэдээлэл харуулдаг болгов.
    // try {
    // const response = await
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${listStatus}?language=en-US&page=1`,
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
          },
        }
      )
      // setData(response.data.results);
      .then((res) => setData(res.data.results));

    // catch (error) {
    //   console.error("aldaa shu api:", error);
    // }
    // fetchData();
  }, []); // 'listStatus' хувьсагч өөрчлөгдөх үед дахин татна

  return (
    <div className="w-full flex flex-col gap-8 px-20">
      <div className="flex justify-between">
        <h3 className="font-[600] text-2xl text-[#09090B]">{listStatusName}</h3>
        <Button variant="link" className="flex gap-2 w-30 h-9">
          <p className="font-[500] text-lg text-[#09090B]">See more</p>
          <AiOutlineArrowRight size={16} />
        </Button>
      </div>
      {/* <div className="w-full grid-rows-[200px_minmax(900px,1fr)_100px] "> */}
      <div className="w-full grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {data?.slice(0, 10).map((value: any, index: any) => {
          return (
            <Movie
              key={index}
              posterLink={`https://image.tmdb.org/t/p/w300${value.poster_path}`}
              rating={value.vote_average}
              movieName={value.original_title}
            />
          );
        })}
      </div>
    </div>
  );
};
