import { FaUser, FaHistory } from "react-icons/fa";
import { GoHome, GoHomeFill, GoHistory } from "react-icons/go";
import { CiUser } from "react-icons/ci";

const BottomNav = ({ activeTab, setActiveTab }) => {
  return (
    <div className="btm-nav md:hidden bg-black">
      <button onClick={() => setActiveTab('home')}>
        {activeTab === 'home' ? <GoHomeFill size={24} color="#A47C7A" /> : <GoHome size={24} color="white" />}
        <span className={`text-xs ${activeTab === 'home' ? 'text-[#A47C7A]' : 'text-white'}`}>Home</span>
      </button>
      <button onClick={() => setActiveTab('history')}>
        {activeTab === 'history' ? <FaHistory size={24} color="#A47C7A" /> : <GoHistory size={24} color="white" />}
        <span className={`text-xs ${activeTab === 'history' ? 'text-[#A47C7A]' : 'text-white'}`}>History</span>
      </button>
      <button onClick={() => setActiveTab('account')}>
        {activeTab === 'account' ? <FaUser size={24} color="#A47C7A" /> : <CiUser size={24} color="white" />}
        <span className={`text-xs ${activeTab === 'account' ? 'text-[#A47C7A]' : 'text-white'}`}>Account</span>
      </button>
    </div>
  );
};

export default BottomNav;
