import React from "react";

interface MovieDetailsProps {
  onClose: () => void;
  actors: string;
  genre: string;
  runtime: string;
  plotSummary: string;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({
  onClose,
  actors,
  genre,
  runtime,
  plotSummary,
}) => {
  return (
    <div className="block mx-4 lg:mx-0 lg:fixed lg:inset-0 top-24 lg:flex lg:items-center lg:justify-center lg:z-50 mt-10">
      <div className="w-fit lg:w-1/2 px-4 bg-gray-200 text-xs md:text-sm rounded-md shadow-xl pb-4">
        <h1 className="text-base lg:text-lg text-center pt-2">
          More Information About The Movie
        </h1>
        <div className="font-bold">
          Actors: <span className="font-normal">{actors}</span>
        </div>
        <p className="font-bold">
          Genre: <span className="font-normal">{genre}</span>
        </p>
        <p className="font-bold">
          Runtime: <span className="font-normal">{runtime}</span>
        </p>
        <p className="font-bold w-2/3">
          Plot Summary: <span className="font-normal">{plotSummary}</span>
        </p>
        <button
          type="button"
          className="bg-gray-600 rounded-lg text-white px-4 py-3 mt-3"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
