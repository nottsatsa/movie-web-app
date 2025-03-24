// 'use client';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// import { Footer } from '@/components/Footer';
// import { MovieDetail } from '@/components/MovieDetail';
// import { Navigation } from '@/components/Navigation';

// interface DetailProps {
//   params: {
//     movieId: string;
//   };
// }

// export default function Detail({ params }: DetailProps) {
//   // Default export хийсэн
//   const { movieId } = params;

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, {
//         headers: {
//           Accept: 'application/json',
//           Authorization:
//             'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE',
//         },
//       })
//       .then((res) => setData(res.data.results));
//   }, []);

//   return (
//     <div>
//       Movie ID: {movieId}
//       <Navigation />
//       {data?.slice(0, 1).map((value: any, index: any) => {
//         return (
//           <MovieDetail
//             key={movieId}
//             title={value.title}
//             release_date={value.release_date}
//             runtime={value.runtime}
//             vote_average={value.vote_average}
//             vote_count={value.vote_count}
//             poster_path={value.poster_path}
//             backdrop_path={value.backdrop_path}
//             genres={'value.genres'}
//             overview={value.overview}
//             directorName={'directorName'}
//             writersName={'writersName'}
//             starsName={'starsName'}
//             movieId={movieId}
//           />
//         );
//       })}
//       <Footer />
//     </div>
//   );
// }

'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { use } from 'react'; // Import use() from React

import { Footer } from '@/components/Footer';
import { MovieDetail } from '@/components/MovieDetail';
import { Navigation } from '@/components/Navigation';

interface DetailProps {
  params: Promise<{
    movieId: string;
  }>;
}

export default function Detail({ params }: DetailProps) {
  // Unwrap params Promise using use()
  const { movieId } = use(params);

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          {
            headers: {
              Accept: 'application/json',
              Authorization: 'Bearer YOUR_ACCESS_TOKEN',
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, [movieId]);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <Navigation />
      <MovieDetail
        key={movieId}
        title={data.title}
        release_date={data.release_date}
        runtime={data.runtime}
        vote_average={data.vote_average}
        vote_count={data.vote_count}
        poster_path={data.poster_path}
        backdrop_path={data.backdrop_path}
        genres={data.genres.map((genre: any) => genre.name).join(', ')}
        overview={data.overview}
        directorName="Director Name"
        writersName="Writers Name"
        starsName="Stars Name"
        movieId={movieId}
      />
      <Footer />
    </div>
  );
}
