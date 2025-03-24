import { FaStar } from "react-icons/fa";

interface MovieDetailProps {
  title: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  backdrop_path: string;
}

export const MovieDetail = ({
  title,
  release_date,
  runtime,
  vote_average,
  vote_count,
  poster_path,
  backdrop_path,
}: MovieDetailProps) => {
  return (
    <div
      className="w-full px-[var(--custom-padding)] md:px-[var(--custom-padding-md)]"
      style={
        {
          "--custom-padding": "0px", // Custom CSS variable
          "--custom-padding-md": "100px", // Custom CSS variable for md breakpoint
        } as React.CSSProperties
      }>
      <div className="flex flex-row w-full justify-between">
        {/* MovieDetailTitle */}
        <div className="flex justify-between items-center ">
          <div className="flex flex-col items-start gap-1">
            <h1 className="font-[700] text-4xl text-[#09090B]">{title}</h1>
            <div className="text-lg font-[400] text-[#09090B]">
              {release_date}·{"PG"}·{runtime}
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
                  {vote_average}
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
      {/* <div className="flex items-center gap-[32px] self-stretch md:flex-row flex-col-reverse">
        <img
          className="lg:w-[300px] sm:w-[200px] w-[100px]"
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        />
        <img
          className="flex w-full sm:h-[300px] items-center overflow-hidden"
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        />
      </div> */}
      <div className="flex items-center gap-[32px] self-stretch md:flex-row flex-col-reverse">
        <img
          className="lg:w-[290px] lg:h-[428px] sm:w-[200px] w-[100px] object-cover"
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        />
        <img
          className="flex w-full lg:w-auto lg:h-[428px] sm:h-[300px] md:h-[400px] h-[200px] object-cover"
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        />
      </div>
    </div>
  );
};
