import Hero from "../components/hero";
import chi2 from "../images/posters/portrait/the.chi.jpg";
import theChi from "../images/posters/landscape/the.chi.png";
import Menu from "../components/menu";
import Header from "../components/header";
import BottomNav from "../components/bottomNav";
import PortraitPoster from "../components/portrait_poster";
import LandscapePoster from "../components/landscape_poster";
import VerticalSec from "../components/verticalsec";


const Home = () => {
  return (
    <div className="flex bg-black">
      <div className="pb-24">
      <Header />
      <div className="flex">
        <div className="hidden md:block ml-4 h-full font-medium">
          <Menu />
        </div>
        <div className="flex flex-col w-full md:px-5">
          <div className="flex flex-col lg:flex-row lg:space-x-2">
            <Hero />
            <VerticalSec title="Latest Releases" />
            <VerticalSec title="Latest Releases" />
        </div>
      </div>
     </div>
      <BottomNav />
    </div>
   </div>
  );
};

export default Home;
