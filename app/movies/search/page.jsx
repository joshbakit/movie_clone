import Card from "@/app/components/Card";
import SearchResult from "@/app/components/SearchResult";
import { getMovies } from "@/utils/request";
import React from "react";

const SearchPage = async ({ searchParams }) => {
  const searchText = searchParams.query;
  const movies = await getMovies(searchText);
  return (
    <SearchResult searchText={searchText} movies={movies}/>
  );
};

export default SearchPage;
