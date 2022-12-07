import React from "react";
import Genre from "../Genre";
import genre from "../../data/genre.json";

function MovieDetail({ data }) {
  // console.log(genre);
  return (
    <>
      <div className="movie-info flex justify-center">
        <div className="box">
          <div className="text-xs md:text-base text-textPrimary">
            Release Date:
            <span className="text-white">{data.release_date}</span>
          </div>
          <div className="text-sm md:text-4xl mt-3 tracking-widest font-bold">
            {data.original_title}
          </div>
          <Genre data={genre} />
        </div>
      </div>
      <div className="movie-image flex justify-center">
        <div className="md:w-72 w-full">
          <img
            src={process.env.REACT_APP_API_IMAGE_URL + data.poster_path}
            alt="poster"
            className="m-auto"
          />
        </div>
      </div>
      <div className="movie-description col-span-2 md:col-span-1 md:mt-0 mt-5 md:text-base text-sm">
        <div className="desc border-b-2 border-textPrimary">
          {data.overview}
        </div>
        <div className="country mt-3">
          <div className="flex justify-between mb-5 uppercase">
            <label>Country: </label>
            {data.original_language}
          </div>
          <div className="flex justify-between">
            <label>Actors: </label>
            {data.Actors}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
