import Results from '@/components/Results';
import Image from 'next/image'


const API_KEY = process.env.API_KEY

export default async function Home({ searchParams }) {

  // searchParams next13 function
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(`https://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/movie/week'}?api_key=${API_KEY}&language=en-US&page=1,`, { next: { revalidate: 10000 } });

  const data = await res.json();
  const results = data.results;
  // console.log(results);

  if (!res.ok) { 
    throw new Error("Failed to fetch the data");
  }

  return (
    <div>
      <Results films={results} />
    </div>
  )
}
