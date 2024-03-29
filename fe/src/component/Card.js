import React from "react";

function Card(props) {
  return (
    <div className="w-full md:mt-0 mt-3">
      <div
        className="relative"
        onClick={props.onClick}
        data-video={props.popular.id}
      >
        <img
          src={process.env.REACT_APP_API_IMAGE_URL + props.popular.poster_path}
          alt="best-week"
          className="w-full md:object-contain rounded-xl"
        />
        <div className="absolute bg-[#EDBF17] top-0 right-0 rounded text-white md:w-20 w-2/3 px-2">
          <div className="flex justify-between w-full items-center">
            <div className="md:text-sm text-xs text-black font-bold">IMDB</div>
            {props.popular.vote_average}
          </div>
        </div>
      </div>
      <div className="text-lg text-center">{props.popular.title}</div>
    </div>
  );
}

export default Card;
