import theChi from "../images/posters/landscape/the.chi.png";
import theChi2 from "../images/posters/portrait/the.chi.jpg";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Hero() {
  return (
   <Carousel autoPlay={true} infiniteLoop={true}>
    <div>
    <div className="flex-shrink-0 w-full lg:w-2/3 justify-center relative md:rounded-lg flex h-1/4 md:h-1/5">
      <a href="/series/the-chi">
        <img className="md:rounded-lg object-cover h-full w-full" src={theChi} alt="The Chi" />
      </a>
      <div className="absolute top-0 w-full h-full flex items-center justify-center p-4 text-white md:rounded-lg">
       <div className="max-w-3/4 max-h-1/2 p-5 bg-black text-center opacity-70">
        <a href="/series/the-chi">
          <h5 className="text-4xl font-semibold tracking-tight hover:text-blue-600 text-white">
            The Chi
          </h5>
        </a>
        <div className="flex w-full space-x-2 justify-center overflow-hidden">
          <span className="text-sm">S06E05</span>
          <span className="text-sm">|</span>
          <span className="text-sm">genre</span>
          <span className="text-sm">|</span>
          <div className="p-0.5 rounded flex">
            <span className="text-sm">5.0</span>
            <span className="text-xs">/5</span>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </Carousel>
  );
}

export default Hero;
