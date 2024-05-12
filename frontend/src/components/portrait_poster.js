import { FaStar } from "react-icons/fa";

const PortraitPoster = ({ image, title, link, episode, rating }) => {
  return (
    <div className="w-full p-0 h-full relative">
      <div className="">
        <span className="text-xs p-1 bg-black absolute top-1 left-1 opacity-80">S06E05</span>
        <span className="text-xs p-1 bg-black flex absolute top-1 right-1"><FaStar />5.0</span>
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      <a href={link}>
         <h5 className="text-md font-semibold tracking-tight mt-1.5 mb-3 text-white">{title}</h5>
      </a>
    </div>
  );
};

export default PortraitPoster;
