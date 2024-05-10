import { FaStar } from "react-icons/fa";

const PortraitPoster = ({ image, title, link, episode, rating }) => {
  return (
    <div className="w-full p-0 h-full relative">
      <div className="">
        <span className="text-xs p-1 bg-gray-200 rounded absolute top-1 left-1">S06E05</span>
        <span className="text-xs p-1 bg-gray-200 flex rounded-full absolute top-1 right-1"><FaStar />5.0</span>
        <img className="btn p-0 w-full h-full object-cover rounded" src={image} alt={title} />
      </div>
      <a href={link}>
         <h5 className="text-md font-semibold tracking-tight">{title}</h5>
      </a>
    </div>
  );
};

export default PortraitPoster;
