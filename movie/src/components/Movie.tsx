import { FaStar } from "react-icons/fa";

export const Movie = ({ posterLink, rating, movieName }: any) => {
  return (
    <div className="w-57.5 h-110 flex flex-col gap-1 bg-[#F4F4F5] rounded-lg">
      <img src={posterLink} className="w-57.5 h-85 rounded-t-lg" />
      <div className="w-57.5 h-23.5 flex flex-col bg-[#F4F4F5] rounded-b-lg p-2">
        <div className="w-53.5 h-5.5 flex flex-row gap-1 items-center">
          <FaStar size={16} color="#fde046" />
          <div>
            <span className="text-sm font-[500] text-[#09090B]">{rating}</span>
            <span className="text-[#71717A] text-xs">/10</span>
          </div>
        </div>
        <p className="w-53.5 h-14 text-lg font-[400] overflow-hidden">
          {movieName}
        </p>
      </div>
    </div>
  );
};
