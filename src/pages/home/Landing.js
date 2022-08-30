import axios from "axios";
import { useEffect, useState } from "react";

const Landing = () => {
  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then(({ data }) => {
        console.log(data.results[0]);
        setMovies(data.results);
        setMovie(data.results[0]);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/movie/${data.id}`, {
  //       params: {
  //         api_key: process.env.REACT_APP_API_KEY,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     });
  // });

  return (
    <>
      <div className="container mx-auto text-white pt-20">
        <div className="grid grid-cols-3 items-center mb-5">
          <div className="movie-info flex justify-center">
            <div className="box">
              <div className="text-base text-textPrimary">
                Release Date:
                <span className="text-white">{movie.release_date}</span>
              </div>
              <div className="text-4xl mt-3 tracking-widest font-bold">
                {movie.original_title}
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
                src={process.env.REACT_APP_API_IMAGE_URL + movie.poster_path}
                alt="poster"
                className="m-auto"
              />
            </div>
          </div>
          <div className="movie-description">
            <div className="desc border-b-2 border-textPrimary">
              {movie.overview}
            </div>
            <div className="country mt-3">
              <div className="flex justify-between mb-5">
                <label>Country: </label>
                {movie.original_language}
              </div>
              <div className="flex justify-between">
                <label>Actors: </label>
                {movie.Actors}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#2E2E2E] h-36 w-full p-3">
          <div className="grid grid-cols-6 grid-rows-1 gap-5 h-full">
            {movies.slice(0, 6).map((thumb, index) => {
              return (
                <div
                  className="group w-full h-full rounded-lg overflow-hidden relative transition hover:scale-110"
                  key={index}
                >
                  <img
                    src={
                      process.env.REACT_APP_API_IMAGE_URL + thumb.backdrop_path
                    }
                    alt="thumb"
                    className="w-full h-full"
                  />
                  <div className="title absolute bottom-0 w-full opacity-0 bg-black-rgba text-center py-1 transition ease-in-out duration-200 group-hover:opacity-100">
                    {thumb.original_title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
