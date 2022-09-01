import React from "react";

function MovieDetail({ data }) {
  return (
    <>
      <div className="movie-info flex justify-center">
        <div className="box">
          <div className="text-base text-textPrimary">
            Release Date:
            <span className="text-white">{data.release_date}</span>
          </div>
          <div className="text-4xl mt-3 tracking-widest font-bold">
            {data.original_title}
          </div>
          <div className="flex mt-3 text-textPrimary">
            <div className="border border-textPrimary px-2 mr-1 rounded-full">
              Action
            </div>
            <div className="border border-textPrimary px-2 mx-1 rounded-full">
              Action
            </div>
            <div className="border border-textPrimary px-2 mx-1 rounded-full">
              Action
            </div>
          </div>
        </div>
      </div>
      <div className="movie-image flex justify-center">
        <div className="w-72">
          <img
            src={process.env.REACT_APP_API_IMAGE_URL + data.poster_path}
            alt="poster"
            className="m-auto"
          />
        </div>
      </div>
      <div className="movie-description">
        <div className="desc border-b-2 border-textPrimary">
          {data.overview}
        </div>
        <div className="country mt-3">
          <div className="flex justify-between mb-5">
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
