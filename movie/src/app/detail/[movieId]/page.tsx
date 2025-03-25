"use client";
import { use, useState, useEffect } from "react";
import axios from "axios";

import { Footer } from "@/components/Footer";
import { MovieDetail } from "@/components/MovieDetail";
import { Navigation } from "@/components/Navigation";
import { useRouter } from "next/navigation";

interface DetailProps {
  params: Promise<{
    movieId: string;
  }>;
}

export default function Detail({ params }: DetailProps) {
  const { movieId } = use(params); // params-ийг unwrap хийх

  const [movieData, setMovieData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieData = async () => {
      try {
        const [movieResponse, creditResponse, videosResponse] =
          await Promise.all([
            axios.get(
              `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
              {
                headers: {
                  Accept: "application/json",
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
                },
              }
            ),
            axios.get(
              `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
              {
                headers: {
                  Accept: "application/json",
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
                },
              }
            ),
            axios.get(
              `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
              {
                headers: {
                  Accept: "application/json",
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
                },
              }
            ),
          ]);

        setMovieData({
          ...movieResponse.data,
          credits: creditResponse.data,
          videos: videosResponse.data.results,
        });
      } catch (error) {
        console.error("Error fetching movie data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [movieId]);

  if (loading) return <p>Loading...</p>;
  if (!movieData) return <p>Movie not found.</p>;

  const {
    title,
    release_date,
    runtime,
    vote_average,
    vote_count,
    poster_path,
    backdrop_path,
    overview,
    genres,
    credits,
    videos,
  } = movieData;

  // Extract the key for the first video (if available)
  const videoKey = videos.length > 0 ? videos[0].key : null;

  return (
    <div>
      <Navigation />
      <h2>Movie ID: {movieId}</h2>

      <MovieDetail
        title={title}
        release_date={release_date}
        runtime={runtime}
        vote_average={vote_average}
        vote_count={vote_count}
        poster_path={poster_path}
        backdrop_path={backdrop_path}
        genres={genres.map((genre: any) => genre.name).join(", ")}
        overview={overview}
        directorName={
          credits.crew.find((person: any) => person.job === "Director")?.name ||
          "Unknown"
        }
        writersName={
          credits.crew
            .filter((person: any) => person.job === "Writer")
            .map((writer: any) => writer.name)
            .join(", ") || "Unknown"
        }
        starsName={
          credits.cast
            .slice(0, 3)
            .map((actor: any) => actor.name)
            .join(", ") || "Unknown"
        }
        movieId={movieId}
        videoKey={videoKey}
      />

      <Footer />
    </div>
  );
}
