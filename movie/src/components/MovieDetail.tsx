"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Badge } from "./ui/badge";
import { MoviesList } from "./MoviesList";
import { Button } from "./ui/button";
import { IoPlayOutline, IoArrowBackOutline } from "react-icons/io5";
import { Play } from "next/font/google";

interface MovieDetailProps {
  title: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  backdrop_path: string;
  genres: string;
  overview: string;
  directorName: string;
  writersName: string;
  starsName: string;
  movieId: any;
  onClick?: () => void;
  videoKey: string;
}

export const MovieDetail = ({
  title,
  release_date,
  runtime,
  vote_average,
  vote_count,
  poster_path,
  backdrop_path,
  genres,
  overview,
  directorName,
  writersName,
  starsName,
  movieId,
  videoKey,
  onClick,
}: MovieDetailProps) => {
  const [showIframe, setShowIframe] = useState(false);
  const handlePlayClick = () => {
    setShowIframe(true);
  };

  const handleBackClick = () => {
    setShowIframe(false);
  };

  return (
    <div
      className="w-full px-[var(--custom-padding)] md:px-[var(--custom-padding-md)] flex flex-col gap-8 static"
      style={
        {
          "--custom-padding": "0px", // Custom CSS variable
          "--custom-padding-md": "100px", // Custom CSS variable for md breakpoint
        } as React.CSSProperties
      }>
      {" "}
      <>
        <div className="flex flex-row w-full justify-between">
          {/* MovieDetailTitle */}
          <div className="flex justify-between items-center ">
            <div className="flex flex-col items-start gap-1">
              <h1 className="font-[700] text-4xl text-[#09090B]">{title}</h1>
              <div className="text-lg font-[400] text-[#09090B]">
                {release_date}·{"PG"}·{`${runtime}min`}
              </div>
            </div>
          </div>
          {/* Poster&Video */}
          <div className="flex flex-col items-start w-fit">
            <h1 className="text-xs font-[500]">Rating</h1>
            <div className="flex flex-row gap-1">
              <FaStar size={28} color="#fde046" />
              <div className="flex flex-col gap-0">
                <div>
                  <span className="text-lg font-[500] text-[#09090B]">
                    {String(vote_average).slice(0, 3)}
                    {/* {vote_average} */}
                  </span>
                  <span className="text-[#71717A] text-base">/10</span>
                </div>
                <h1 className="text-xs font-[400] text-[#71717A]">
                  {vote_count}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between items-center gap-[32px] self-stretch md:flex-row flex-col-reverse">
          <img
            className="md:w-[290px] md:h-[428px] sm:w-[200px] w-[100px] object-cover"
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          />

          {/* //==================================================================================== */}

          {showIframe && (
            <div className="w-[70vw] aspect-video absolute right-50 top-50 z-10">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoKey}?si=cEITzCke7D1GGfUp`}
                // src="https://www.youtube.com/embed/pYmAy3H0s3Q?si=cEITzCke7D1GGfUp"
                // src={`${}`}
                allowFullScreen></iframe>
              {/* Back button */}
              <div className="absolute top-4 left-4">
                <Button
                  className="rounded-full bg-[#FFF] flex items-center gap-2"
                  onClick={handleBackClick}>
                  <IoArrowBackOutline size={16} color="black" />
                  <span>Back</span>
                </Button>
              </div>
            </div>
          )}
          {/* //==================================================================================== */}
          <div
            className="flex w-full md:h-[428px] sm:h-[300px] h-[200px] bg-cover bg-center relative"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
            }}>
            <div className="flex items-center gap-3 absolute bottom-6 left-6 ">
              <Button
                className="rounded-full bg-[#FFF]"
                onClick={handlePlayClick}>
                <IoPlayOutline size={16} color="black" />
              </Button>
              <h1 className="text-[#FFF] text-base font-[400]">Play trailer</h1>
              <h1 className="text-[#FFF] text-base font-[400]">2:35</h1>
            </div>
          </div>
        </div>
      </>
      <div className="flex flex-col items-start gap-5">
        <div className="flex items-start gap-3">
          <Badge variant="outline">{genres}</Badge>
        </div>
        <h1 className="text-[#09090B] text-base/6 font-[400]">{overview}</h1>
        <div className="flex flex-col items-start gap-5 w-full">
          <div className="flex flex-col items-start gap-1 w-full">
            <div className="w-full">
              <div className="flex items-center gap-[53px] w-full">
                <h1 className="text-base/7 font-[700] text-[#09090B]">
                  {"Director"}
                </h1>
                <h1 className="text-base/6 font-[400] text-[#09090B]">
                  {directorName}
                </h1>
              </div>
              <div className="flex py-1 flex-col gap-2.5 w-full">
                <span className="h-[1px] w-full border-[0.5px] border-[#E4E4E7] "></span>
              </div>
            </div>
            <>
              <div className="flex items-center gap-[53px]">
                <h1 className="text-base/7 font-[700] text-[#09090B]">
                  {"Writers"}
                </h1>
                <h1 className="text-base/6 font-[400] text-[#09090B]">
                  {writersName}
                </h1>
              </div>
              <div className="flex py-1 flex-col gap-2.5 w-full">
                <span className="h-[1px] w-full border-[0.5px] border-[#E4E4E7]"></span>
              </div>
            </>
            <>
              <div className="flex items-center gap-[53px]">
                <h1 className="text-base/7 font-[700] text-[#09090B]">
                  {"Stars"}
                </h1>
                <h1 className="text-base/6 font-[400] text-[#09090B]">
                  {starsName}
                </h1>
              </div>
              <div className="flex py-1 flex-col gap-2.5 w-full">
                <span className="h-[1px] w-full border-[0.5px] border-[#E4E4E7]"></span>
              </div>
            </>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-8">
        <MoviesList
          className="px-0"
          listStatus={`${movieId}/similar`}
          listStatusName="More like this"
          tav={true}
          pageNo={"1"}
        />
      </div>
    </div>
  );
};
