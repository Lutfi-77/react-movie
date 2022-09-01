import React from "react";

function NewArrivals({ data }) {
  return (
    <div className="group w-full h-full rounded-lg overflow-hidden relative transition hover:scale-110">
      <img
        src={process.env.REACT_APP_API_IMAGE_URL + data.backdrop_path}
        alt="thumb"
        className="w-full h-full"
      />
      <div className="title absolute bottom-0 w-full opacity-0 bg-black-rgba text-center py-1 transition ease-in-out duration-200 group-hover:opacity-100">
        {data.original_title}
      </div>
    </div>
  );
}

export default NewArrivals;
