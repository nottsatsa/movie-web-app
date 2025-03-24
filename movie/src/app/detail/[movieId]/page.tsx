// export function Detail({ params: {movieId} }) {
//   return <div>{movieId}</div>;
// }

import { Footer } from "@/components/Footer";
import { MovieDetail } from "@/components/MovieDetail";
import { Navigation } from "@/components/Navigation";

interface DetailProps {
  params: {
    movieId: string;
  };
}

export default function Detail({ params }: DetailProps) {
  // Default export хийсэн
  const { movieId } = params;
  return (
    <div>
      Movie ID: {movieId}
      <Navigation />
      <MovieDetail
        title={"title"}
        release_date={"1994-09-23"}
        runtime={142}
        vote_average={8.708}
        vote_count={27948}
        poster_path="/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg"
        backdrop_path="/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg"
      />
      <Footer />
    </div>
  );
}
