"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "./ui/button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Movie } from "./Movie";
import { useRouter } from "next/navigation";

export const MoviesList = ({
  listStatus,
  listStatusName,
  className,
  tav,
  pageNo,
}: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // asynchronous код давхар гүйцэтгэгдэх боломжтой болно.
    // const fetchData = async () => {
    // Алдаа гарахад try-catch ашиглан барьж, алдааны мэдээлэл харуулдаг болгов.
    // try {
    // const response = await
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${listStatus}?language=en-US&page=${pageNo}`,
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
  }, [pageNo]); // 'listStatus' хувьсагч өөрчлөгдөх үед дахин татна

  const router = useRouter();
  const handleOnClick = (movieId: string) => {
    router.push(`/detail/${movieId}`);
  };

  const seeMoreClick = () => {
    router.push(`/see_more/${listStatus}`);
  };
  console.log(pageNo, "pageNO");

  return (
    <div className={`w-full flex flex-col gap-8 ${className}`}>
      <div className="flex justify-between">
        <h3 className="font-[600] text-2xl text-[#09090B]">{listStatusName}</h3>
        <Button
          variant="link"
          onClick={seeMoreClick}
          className="flex gap-2 w-30 h-9">
          <p className="font-[500] text-lg text-[#09090B]">See more</p>
          <AiOutlineArrowRight size={16} />
        </Button>
      </div>
      {/* <div className="w-full grid-rows-[200px_minmax(900px,1fr)_100px] "> */}
      <div className="w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {tav
          ? data?.slice(0, 5).map((value: any, index: any) => {
              return (
                <Movie
                  key={index}
                  posterLink={`https://image.tmdb.org/t/p/w300${value.poster_path}`}
                  rating={value.vote_average}
                  movieName={value.original_title}
                  onClick={() => handleOnClick(value.id)}
                />
              );
            })
          : data?.slice(0, 10).map((value: any, index: any) => {
              return (
                <Movie
                  key={index}
                  posterLink={`https://image.tmdb.org/t/p/w300${value.poster_path}`}
                  rating={value.vote_average}
                  movieName={value.original_title}
                  onClick={() => handleOnClick(value.id)}
                />
              );
            })}
      </div>
    </div>
  );
};
