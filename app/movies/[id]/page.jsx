import { getMovieDetails, getSimilarMovies } from "@/utils/request";

const MovieDetailsPage = async ({ params }) => {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  const movieDetails = await getMovieDetails(params.id);
  const similarMovies = await getSimilarMovies(params.id);
  console.log(movieDetails);
  return (
    <div className="container flex min-h-screen flex-col items-start p-10 mx-auto">
      <div className="flex flex-col md:flex-col lg:flex-row shadow-2xl rounded-box shadow-stone-500 p-5 justify-center gap-3 w-full">
        <img
          src={IMAGE_BASE_URL + movieDetails.poster_path}
          alt={movieDetails.original_title}
          className="rounded shadow-2xl"
        />
        <div className="p-5 flex flex-col gap-5">
          <div className="flex gap-5 ">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">
              {movieDetails.original_title}
            </h1>
          </div>
          <div className="flex gap-2 text-black">
            <p className="p-1 bg-yellow-100 rounded border">
              {movieDetails.origin_country}
            </p>
            <p className="p-1 bg-yellow-100 rounded border">
              {movieDetails.original_language}
            </p>
            <p className="p-1 bg-yellow-100 rounded border">
              {movieDetails.release_date}
            </p>
          </div>

          <p className="text-pretty font-bold">{movieDetails.overview}</p>

          <div>
            <p>
              {movieDetails.genres.map((genre) => {
                return (
                  <span
                    key={genre.id}
                    className="p-1 px-2 bg-black text-white rounded-lg m-1"
                  >
                    {genre.name}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 justify-center">
        <h1 className="text-[40px] font-bold">Similar Movies</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {similarMovies.map((movie) => {
            return (
              <div className="w-64 text-center align-center">
                <img
                  className="shadow-2xl rounded-xl mx-auto"
                  src={IMAGE_BASE_URL + movie.poster_path}
                  alt={movie.original_title}
                />
                <div className="">
                  <h1 className="text-lg font-bold text-pretty">
                    {movie.original_title}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
