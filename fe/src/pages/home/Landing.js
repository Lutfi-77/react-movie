import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../component/Card";
import Category from "../../component/home/Category";
import MovieDetail from "../../component/home/MovieDetail";
import NewArrivals from "../../component/home/NewArrivals";
import Modal from "../../component/Modal";
import ModalOrder from "../../component/ModalOrder";

const Landing = () => {
  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);
  const [detail, setDetail] = useState([]);
  const [popular, setPopulars] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [modal, setModal] = useState(false);
  const [newModal, setNewModal] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then(({ data }) => {
        setMovies(data.results);
        setMovie(data.results[0]);
      });
  }, []);

  const showModal = () => {
    setModal(!modal);
    setTrailer("");
  };

  const getDetail = (e) => {
    const idVideo = e.target.parentNode.dataset.video;
    axios
      .all([
        axios.get(`${process.env.REACT_APP_API_URL}/movie/${idVideo}/videos`, {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
          },
        }),

        axios.get(`${process.env.REACT_APP_API_URL}/movie/${idVideo}`, {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
          },
        }),
      ])
      .then(
        axios.spread((trailerData, movieDetail) => {
          setTrailer(trailerData.data.results[0]);
          setDetail(movieDetail.data);
          console.log(movieDetail.data);
          setModal(!modal);
        })
      );
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/movie/popular`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then(({ data }) => {
        setPopulars(data.results);
      });
  }, []);

  return (
    <>
      <div className="container px-3 md:px-0 md:mx-auto text-white pt-20">
        <div className="grid md:grid-cols-3 grid-cols-2 items-center mb-5">
          <MovieDetail data={movie} />
        </div>
        <div className="bg-[#2E2E2E] h-36 w-full p-5 rounded-lg">
          <div className="grid md:grid-cols-6 md:grid-rows-1 md:gap-5 grid-cols-3 gap-2 h-full">
            {movies.slice(0, 6).map((thumb, index) => {
              return <NewArrivals data={thumb} key={index} />;
            })}
          </div>
        </div>
      </div>

      <section className="pt-16 bg-primary pb-16">
        <Category />
      </section>

      <section className="bg-[#F2F2F2] w-full">
        <div className="container mx-auto md:px-0 px-5">
          <h3 className="md:pt-16 pt-8 md:text-3xl text-2xl text-center font-semibold drop-shadow-md">
            The Best Of The Week
          </h3>
          <div className="text-sm text-center md:mt-5 mt-2">
            Introducing <span className="font-bold">The Best</span> Movies And
            Series Of The Week
          </div>
          <div className="grid md:grid-cols-5 md:gap-5 grid-cols-3 grid-rows-2 gap-5 w-full mt-5">
            {popular.slice(0, 10).map((best, index) => {
              return <Card popular={best} key={index} onClick={getDetail} />;
            })}
          </div>
        </div>
      </section>
      <Modal
        isOpen={modal}
        showModal={showModal}
        videoTrailer={trailer}
        detailMovie={detail}
        setModal={setModal}
        isOpenOrder={setNewModal}
      />
      <ModalOrder isOpenOrder={newModal} setOpen={setNewModal} data={detail} />
    </>
  );
};

export default Landing;
