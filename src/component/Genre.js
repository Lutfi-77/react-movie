import React from "react";

function Genre({ data }) {
  return (
    <div className="flex mt-3 text-textPrimary md:text-base text-sm">
      {data?.map((genre, i) => {
        return (
          <div
            key={i}
            className="border border-textPrimary px-2 mr-1 rounded-full"
          >
            {genre.name}
          </div>
        );
      })}
    </div>
  );
}

export default Genre;
