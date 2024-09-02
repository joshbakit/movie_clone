"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/movies/search?query=${searchText}`);
    }
  };

  return (
    <div className="navbar bg-base-content px-5">
      <div className="flex-1">
        <a className="link link-hover text-xl font-bold text-white">
          Movie_Clone
        </a>
      </div>
      <div>
        <form
          className="form-control flex flex-row gap-2"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs"
          />
          <button className="btn btn-outline btn-info">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
