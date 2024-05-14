import { FaSquareXTwitter, FaSquareInstagram, FaTelegram, FaSquareYoutube } from "react-icons/fa6";

const Footer = () => {
  const today = new Date();
  return (
      <footer className="footer px-4 pt-4 border-t text-base-content border-gray-400 text-gray-400 pb-24">
        <div className="flex w-full justify-center">
            <a href="/about" className="">About</a>
	    <a href="/policy" className="">Privacy-policy</a>
            <a href="/terms" className="">T&Cs</a>
 	    <a href="/contact" className="">Contact-us</a>
        </div>
        <div className="flex w-full space-x-4 justify-center">
            <a><FaSquareXTwitter size={24}/></a>
            <a href="https://t.me/primermovies" className="hover:text-blue"><FaTelegram size={24}/></a>
            <a><FaSquareInstagram size={24}/></a>
            <a><FaSquareYoutube size={24}/></a>
        </div>
        <p className="flex-grow place-self-center">Copyright © {today. getFullYear()} - All right reserved</p>
      </footer>
  );
};

export default Footer;
