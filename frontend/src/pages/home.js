import Hero from "../components/hero";
import chi2 from "../images/posters/portrait/the.chi.jpg";
import theChi from "../images/posters/landscape/the.chi.png";
import Menu from "../components/menu";
import Header from "../components/header";
import BottomNav from "../components/bottomNav";
import Footer from "../components/footer";
import PortraitPoster from "../components/portrait_poster";
import LandscapePoster from "../components/landscape_poster";
import VerticalSec from "../components/verticalsec";

const Home = () => {
  return (
    <div className="flex bg-black flex-col">
      <div>
        <Header />
        <div className="flex">
          <div className="flex flex-col w-full md:px-5">
            <div className="flex flex-row max-h-screen">
              <div className="hidden md:block ml-4 h-full font-medium">
                <Menu />
              </div>
              <Hero />
            </div>
            <VerticalSec title="Latest Releases" />
            <VerticalSec title="Latest Releases" />
          </div>
        </div>
      </div>
      <BottomNav />
      <Footer />
    </div>
  );
};

export default Home;
