"use client";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

const SearchResult = ({ searchText, movies }) => {
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const filterMovies = (filter) => {
    let sortedMovies = [];
    switch (filter) {
      case "release_date":
        sortedMovies = [...movies].sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
        break;
      case "popularity":
        sortedMovies = [...movies].sort((a, b) => b.popularity - a.popularity);
        break;
      case "vote_average":
        sortedMovies = [...movies].sort(
          (a, b) => b.vote_average - a.vote_average
        );
        break;
      default:
        break;
    }
    setFilteredMovies(sortedMovies);
  };

  return (
    <div className="container flex min-h-screen flex-col p-16 mx-auto">
      <div className="flex justify-between border-b-2 pb-4">
        <h1 className="text-4xl font-bold">
          Search result for &quot;{searchText}&quot;
        </h1>
        <div>
          <select
            onChange={(e) => filterMovies(e.target.value)}
            className="select select-secondary w-full max-w-xs font-bold"
          >
            <option value="release_year">Release year</option>
            <option value="popularity">Popularity</option>
            <option value="vote_average">Ratings</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-3">
        {filteredMovies.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default SearchResult;
