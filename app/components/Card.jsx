import Link from "next/link";
import React from "react";

const Card = ({ movie }) => {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";

  return (
    <div>
      <Link href={"/movies/" + movie.id}>
        <div className="card bg-base-100 w-52 shadow-xl justify-center">
          <figure className="p-2">
            <img
              src={IMAGE_BASE_URL + movie.poster_path}
              alt={movie.title}
              className="rounded-xl"
            />
          </figure>
          <div className="text-start px-2">
            <h2 className="font-bold">{movie.original_title}</h2>
            
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
