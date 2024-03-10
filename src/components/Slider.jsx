import React, { useEffect, useRef, useState, } from 'react'
import GlobalApi from '../assets/services/GlobalApi'
import { HiChevronLeft } from 'react-icons/hi';
import { HiChevronRight } from 'react-icons/hi2';
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth;
function Slider() {
    const [movieList,setMovieList]=useState([]);
    const elementRef=useRef(); 
    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }

    const SliderRight=(Element)=>{
        Element.scrollLeft+=screenWidth-80
    }
    const SliderLeft=(Element)=>{
        Element.scrollLeft-=screenWidth-89
    }
  return (
    <div>
        <HiChevronLeft className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer " onClick={()=>SliderLeft(elementRef.current)}/>
        <HiChevronRight className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0" onClick={()=>SliderRight(elementRef.current)}/>
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
        {movieList.map((item,index)=>(
            <img key={index} src={IMAGE_BASE_URL+item.backdrop_path} className='min-w-[47%] m-1 h-[310px] object-cover object-left-top rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in'/>
        ))}
    </div>
    </div>
  )
}

export default Slider