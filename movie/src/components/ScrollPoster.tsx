import { FaStar } from "react-icons/fa";
import { Button } from "./ui/button";
import { CiPlay1 } from "react-icons/ci";

export const ScrollPoster = ({
  imageLink,
  rating,
  movieName,
  overview,
}: any) => {
  return (
    <div
      className={`flex relative justify-center h-200 w-full bg-cover bg-center`}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${imageLink})`,
      }}>
      <div className="flex flex-col items-start gap-4 absolute left-35 top-[30%]">
        <div className="flex flex-col items-start">
          <p className="text-base font-[400] text-[#ffffff]">Now Playing:</p>
          <h1 className="text-4xl font-[700] text-[#ffffff]">{movieName}</h1>
          <div className="w-53.5 h-5.5 flex flex-row gap-1 items-center">
            <FaStar size={28} color="#fde046" />
            <div>
              <span className="text-lg font-[600] text-[#FAFAFA]">
                {rating}
              </span>
              <span className="text-base font-[400] text-[#71717A]">/10</span>
            </div>
          </div>
        </div>
        <p className="text-[#FAFAFA] text-xs font-[400] w-75.5">{overview}</p>
        <Button className="bg-[#F4F4F5] text-[#18181B]">
          <CiPlay1 size={16} />
          <p>Watch trailer</p>
        </Button>
      </div>
    </div>
  );
};
