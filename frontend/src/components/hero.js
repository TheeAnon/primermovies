import theChi from "../images/posters/landscape/the.chi.png";
import theChi2 from "../images/posters/portrait/the.chi.jpg";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaStar } from "react-icons/fa";

function Hero({ posters }) {
  return (
   <Carousel autoPlay={true} infiniteLoop={true}>
    
    <div>
    <div className="flex-shrink-0 w-full lg:w-2/3 justify-center relative md:rounded-lg flex h-1/4 items-center md:h-1/5">
      <a href="/series/the-chi">
        <img className="md:rounded-lg object-cover h-full w-full" src={theChi} alt="The Chi" />
      </a>
      <div className="w-3/4 py-2 pt-6 bg-black bg-opacity-70 rounded absolute flex flex-col">
        <span className="absolute align-items-center top-1 p-1 bg-black rounded-full bg-opacity-100 text-sm lg:text-md text-yellow-400 flex"><FaStar />5.0</span>
        <span className="absolute top-1 right-1 p-1 bg-[#f5f5dc] bg-opacity-70 text-sm lg:text-md text-gray-800">S01E02</span>
        <a href="/series/the-chi">
          <h5 className="text-4xl font-semibold line-clamp-1 tracking-tight hover:text-blue-600 text-white">
            The Chi
          </h5>
        </a>
        <p className="lg:text-xl tracking-tight text-[#f5f5dc] line-clamp-2">
            Small Desc djjfhfjrjrjnrn fjfjjririrj hdjdirirjrn r djdjbdbdjjd djrir8r8rue rhur7rurjrjrji
        </p>
        </div>
      </div>
    </div>
    </Carousel>
  );
}

export default Hero;
