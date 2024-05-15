import { useEffect } from 'react';
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
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom"


const Home = () => {

  const navigation = useNavigate()

  const populateToken = async () =>{
     const data = await fetch('http://localhost:1337/api/token',{
        'x-access-token': localStorage.getItem('token'),
     })

     const token = req.json()
  }

  useEffect(()=>{
     const token = localStorage.getItem('token')
     if(toke){
       const user = jwt.decode('token')
       if(!user){
          localStorage.removeItem('token')
          navigation.navigate('/login', {replace: true})
       }
     }else{
       populateToken()
     }
  }, [])


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
