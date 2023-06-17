"use client";
import React, { useState } from "react";
import MovieDetails from "../Components/MovieDetails";

interface MovieCardProps {
  title: string;
  releaseYear: string;
  actors: string;
  genre: string;
  runtime: string;
  plotSummary: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  releaseYear,
  actors,
  genre,
  runtime,
  plotSummary,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleViewDetails = () => {
    setShowDetails(true);
  };

  return (
    <div className="block mx-4 lg:flex xl:justify-center mt-10">
      <div className="w-full xl:w-1/2 px-4 bg-gray-200 text-sm rounded-md shadow-xl pb-4 mr-3">
        <h1 className="text-base lg:text-lg text-center pt-2">
          My Favorite Movie!!
        </h1>
        <div className="mt-2 h-20 w-20 rounded-xl">movie poster here</div>
        <p className="font-bold">
          Title: <span className="font-normal">{title}</span>
        </p>
        <p className="font-bold">
          Release Year: <span className="font-normal">{releaseYear}</span>
        </p>
        <button
          type="button"
          className="bg-gray-600 rounded-lg text-white px-4 py-3 mt-3 hover:border-2 hover:border-slate-800 hover:text-slate-400 hover:bg-white hover:font-semibold"
          onClick={handleViewDetails}
        >
          View Details
        </button>
      </div>
      {showDetails && (
        <MovieDetails
          actors={actors}
          genre={genre}
          runtime={runtime}
          plotSummary={plotSummary}
          onClose={() => setShowDetails(false)}
        />
      )}
    </div>
  );
};

export default MovieCard;
