const Footer = () => {
  const today = new Date();
  return (
      <footer className="footer px-4 border-t text-base-content border-base-300 text-gray-400 pb-24">
        <div className="flex w-full mt-2 justify-center">
            <a href="/about" className="">About</a>
	    <a href="/policy" className="">Privacy-policy</a>
            <a href="/terms" className="">T&Cs</a>
 	    <a href="/contact" className="">Contact-us</a>
        </div>
        <div className="flex w-full">
          <p className="flex-grow">Copyright © {today. getFullYear()} - All right reserved</p>
          <div className="flex flex-end space-x-2">
            <a>Twitter</a>
            <a href="https://t.me/primermovies" className="hover:text-blue">Telegram</a>
            <a>Instagram</a>
            <a>Youtube</a>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
