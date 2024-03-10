import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../assets/services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";
function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      //console.log(resp.data.results)
      setMovieList(resp.data.results);
    });
  };

  const slideRight = (Element) => {
    Element.scrollLeft += 500;
  };
  const slideLeft = (Element) => {
    Element.scrollLeft -= 500;
  };
  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className="text-[50px] text-white p-2 z-10  cursor-pointer hidden md:block absolute mt-[150px]"
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-5 px-3 pb-5"
      >
        {movieList.map((item, index) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCard key={index} />
            ) : (
              <MovieCard movie={item} key={index} />
            )}
          </>
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className="text-[50px] text-white hidden md:block p-2 z-10 top-0 cursor-pointer absolute right-0 mt-[150px]"
      />
    </div>
  );
}

export default MovieList;
