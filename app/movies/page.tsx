"use client";
import React, { useState } from "react";
import SearchBar from "../Components/SearchBar";
import MovieCard from "../Components/MovieCard";
import Link from "next/link";

interface MovieData {
  Title: string;
  Year: string;
  Actors: string;
  Genre: string;
  Runtime: string;
  Plot: string;
}

export default function Home() {
  const [movieData, setMovieData] = useState<MovieData | null>(null);

  const handleMovieData = (data: MovieData) => {
    setMovieData(data);
  };

  return (
    <main className="mt-8">
      <h1 className="text-xl font-semibold text-center">
        Please Search Your Favorite Movie, Series, or Documentaries
      </h1>
      <div>
        {/* movie data will be displayed here */}
        <SearchBar onMovieData={handleMovieData} />
        <div className="mt-4">
          {movieData && Object.keys(movieData).length > 0 ? (
            <MovieCard
              title={movieData.Title}
              releaseYear={movieData.Year}
              actors={movieData.Actors}
              genre={movieData.Genre}
              runtime={movieData.Runtime}
              plotSummary={movieData.Plot}
            />
          ) : (
            <p className="text-center">No movie data available</p>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <button className="bg-blue-500 text-white mt-20 font-semibold px-3 py-2 rounded-xl hover:translate-x-3">
          <Link href={"/"}>Back To Home Page</Link>
        </button>
      </div>
    </main>
  );
}
