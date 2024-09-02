import { getTrendingMovies } from "@/utils/request";
import Card from "./components/Card";

export default async function HomePage() {
  const movies = await getTrendingMovies();

  return (
    <main className="container flex min-h-screen flex-col items-center p-16 mx-auto">
      <h1 className="text-[40px] font-bold">Trending Movies</h1>
      <div className="flex flex-wrap gap-3 justify-center">
        {movies.map(movie => {
          return <Card movie={movie}/>
        })}
      </div>
    </main>
  );
}
