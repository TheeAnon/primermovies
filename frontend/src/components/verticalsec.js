import PortraitPoster from "./portrait_poster";
import chi2 from "../images/posters/portrait/the.chi.jpg";

const VerticalSec = ({ title }) => {
  return (
    <div className="mt-6 px-4">
      <h2 className="text-white text-xl font-bold">{title}</h2>
      <div className="grid grid-cols-2 mt-2 sm:grid-cols-3 md:grid-cols-4 gap-2 lg:grid-cols-6 w-full col-span-full row-span-full">
        <div>
          <PortraitPoster title="The Chi" image={chi2} />
        </div>
        <div>
          <PortraitPoster title="The Chi" image={chi2} />
        </div>
        <div>
          <PortraitPoster title="The Chi" image={chi2} />
        </div>
        <div>
          <PortraitPoster title="The Chi" image={chi2} />
        </div>
        <div>
          <PortraitPoster title="The Chi" image={chi2} />
        </div>
      </div>
    </div>
  );
};

export default VerticalSec;
