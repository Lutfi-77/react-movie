import dataConfig from "../../config/config.json";
import axios from "axios";
import { useEffect, useState } from "react";

const Landing = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then(({ data }) => {
        setData(data.results[0]);
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
      <div className="container mx-auto text-white">
        <div className="grid grid-cols-3 items-center">
          <div className="movie-info flex justify-center">
            <div className="box">
              <div className="text-base text-textPrimary">
                Release Date:
                <span className="text-white">
                  {data.release_date == undefined ? data.release_date : ""}
                </span>
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
            <div className="w-80">
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
        </div>
      </div>
    </>
  );
};

export default Landing;
