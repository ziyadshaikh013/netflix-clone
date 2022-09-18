import axios from "axios";
import React, { useEffect, useState, useRef } from "react";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import Movie from "./Movie";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - 500;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + 500;
    }
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="text-white bg-opacity-50 h-full bg-gradient-to-r from-black left-0 absolute opacity-75 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={60}
        />
        <div
          ref={sliderRef}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="text-white bg-opacity-50 h-full bg-gradient-to-l from-black right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={60}
        />
      </div>
    </>
  );
};

export default Row;
