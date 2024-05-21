//icons
import { FaUser, FaHistory } from "react-icons/fa";
import { GoHome, GoHomeFill, GoHistory } from "react-icons/go";
import { CiUser } from "react-icons/ci";

const BottomNav = ({activeTab, setActiveTab}) => {
return(
<div className="btm-nav md:hidden bg-black">
  <button onClick={()=>setActiveTab('home')}>
    {activeTab==='home'?<GoHomeFill size={24}/>:<GoHome size={24} color="white" />}
    <span className="text-white text-xs">Home</span>
  </button>
  <button onClick={()=>setActiveTab('history')}>
    {activeTab==='history'?<FaHistory size={24} />:<GoHistory size={24} color="white" />}
    <span className="text-white text-xs">History</span>
  </button>
  <button onClick={()=>setActiveTab('account')}>
    {activeTab==='account'?<FaUser size={24} />:<CiUser size={24} color="white" />}
    <span className="text-white text-xs">Account</span>
  </button>
</div>
);
};

export default BottomNav;
