import axios from "axios";
import { useEffect, useState } from "react";
import Category from "../../component/home/Category";
import MovieDetail from "../../component/home/MovieDetail";
import NewArrivals from "../../component/home/NewArrivals";

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
        // console.log(data.results[0]);
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
          <MovieDetail data={movie} />
        </div>
        <div className="bg-[#2E2E2E] h-36 w-full p-5 rounded-lg">
          <div className="grid grid-cols-6 grid-rows-1 gap-5 h-full">
            {movies.slice(0, 6).map((thumb, index) => {
              return <NewArrivals data={thumb} key={index} />;
            })}
          </div>
        </div>
      </div>

      <section className="pt-16 bg-primary pb-16">
        <Category />
      </section>

      <section className="bg-[#F2F2F2] w-full h-full">
        <div className="container mx-auto">
          <h3 className="pt-16 text-3xl text-center font-semibold drop-shadow-md">
            The Best Of The Week
          </h3>
          <div className="text-sm text-center mt-5">
            Introducing <span className="font-bold">The Best</span> Movies And
            Series Of The Week
          </div>
          <div className="grid grid-cols-4 gap-5 w-full">
            <div className="image w-full h-96">
              <img
                src={process.env.REACT_APP_API_IMAGE_URL + movie.poster_path}
                alt="best-week"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="text-lg text-center">Thor Love And Thunder</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
