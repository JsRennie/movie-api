import React from "react";

//type defination
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
    <div className="block mx-4 xl:mx-0 mt-10">
      <div className="w-fit xl:w-1/2 px-4 bg-gray-200 text-xs md:text-sm rounded-md shadow-xl pb-4">
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
          className="bg-gray-600 rounded-lg text-white px-4 py-3 mt-3 hover:border-2 hover:border-slate-800 hover:text-slate-400 hover:bg-white hover:font-semibold"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
