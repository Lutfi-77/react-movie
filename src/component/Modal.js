import React from "react";
import Button from "./Button";
import Genre from "./Genre";

const Modal = ({
  isOpen,
  showModal,
  videoTrailer,
  detailMovie,
  setModal,
  isOpenOrder,
}) => {
  const handleOnclick = () => {
    document.querySelector("iframe").src = "";
    setModal(!isOpen);
    isOpenOrder(true);
  };

  return (
    <div
      className={`bg-black-rgba fixed inset-0 z-20 flex items-center justify-center ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="container w-full relative mx-auto text-center bg-white rounded-lg">
        <span
          className="float-left text-2xl rounded-tl-lg cursor-pointer text-textPrimary hover:bg-[#eee] px-3 py-1"
          onClick={showModal}
        >
          &times;
        </span>
        <div className="w-full mt-2 text-2xl">
          {detailMovie.title ? detailMovie.title : "asdas"}
        </div>
        <div className="w-full grid grid-cols-2 mb-5 mt-5 gap-3 px-3">
          <div className="w-full">
            <iframe
              title={videoTrailer.id}
              className="w-full h-96"
              allow="autoplay"
              src={`https://www.youtube.com/embed/${videoTrailer.key}?autoplay=1&?enablejsapi=1`}
            ></iframe>
          </div>
          <div className="w-full">
            <div className="text-left text-textPrimary">
              <div className="desc">{detailMovie.overview}</div>
              <div className="lang mt-3">
                Original Language:{" "}
                <label className="uppercase">
                  {detailMovie.original_language}
                </label>
              </div>
              <div className="releaseDate flex">
                <label className="mr-1">Release Date: </label>
                {detailMovie.release_date}
              </div>
            </div>
            <Genre data={detailMovie.genres} />
            <Button
              text={"Book Ticket"}
              styles={"bg-secondary float-left mt-5 text-white"}
              onClick={handleOnclick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
