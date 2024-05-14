//icons
import { FaUser, FaHistory } from "react-icons/fa";
import { GoHome, GoHomeFill, GoHistory } from "react-icons/go";
import { CiUser } from "react-icons/ci";

const BottomNav = () => {
return(
<div className="btm-nav md:hidden bg-black">
  <button>
    <GoHome size={24} color="white" />
    <span className="btm-nav-label text-white">Home</span>
  </button>
  <button className="">
    <GoHistory size={24} color="white" />
    <span className="btm-nav-label text-white">History</span>
  </button>
  <button>
    <CiUser size={24} color="white" />
    <span className="btm-nav-label text-white">Account</span>
  </button>
</div>
);
};

export default BottomNav;
