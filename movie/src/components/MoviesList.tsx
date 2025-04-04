"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "./ui/button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Movie } from "./Movie";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/lib/utils";

export const MoviesList = ({
  listStatus,
  listStatusName,
  className,
  tav,
  pageNo,
}: any) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState();
  console.log(listStatus);
  // /similar?movieId=447273

  useEffect(() => {
    // asynchronous код давхар гүйцэтгэгдэх боломжтой болно.
    // const fetchData = async () => {
    // Алдаа гарахад try-catch ашиглан барьж, алдааны мэдээлэл харуулдаг болгов.
    // try {
    // const response = await
    axiosInstance
      .get(`movie/${listStatus}?language=en-US&page=${pageNo}`)
      // setData(response.data.results);
      .then((res) => {
        setData(res.data.results), setPage(res.data.total_pages);
      });
    console.log(page, "suus");

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
    if (listStatus.includes("similar")) {
      const newStatus = listStatus.split("/")[0];

      router.push(`/see_more/${newStatus}`);

      return;
    }
    router.push(`/see_more/${listStatus}`);
  };
  console.log(pageNo, "pageNO");

  const total_pages = {};

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
