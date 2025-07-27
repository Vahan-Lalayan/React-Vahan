import { PlayCircleIcon } from "lucide-react";
import { PlayIcon } from "../icons/playIcon";

export const HeroSection = ({ movie }) => {
  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const hrs = Math.floor(mins / 60);
    const remainingMins = mins % 60;

    if (hrs > 0) {
      return `${hrs} hr ${remainingMins} min`;
    } else {
      return `${mins} min`;
    }
  };
  return (
    <div className="relative w-full h-96 mb-6">
      <img
        src={`/assets/FeaturedCoverImage.png`} // You can customize this later
        alt="cover"
        className="w-full h-screen object-cover rounded"
      />
      <div className="absolute top-0 left-5 text-white px-28 pt-40">
        {movie.Category && (
          <p className="text-[20px] text-white uppercase">
            {movie.Category}
          </p>
        )}
        {/* <img
            src={`/assets/${movie.TitleImage}`}
            alt={movie.Title}
            className="h-12 mb-2"
          /> */}
        <h1 className="text-[50px] font-serif font-bold">{movie.Title}</h1>
        <p className="text-[20px] text-white">
          {movie.ReleaseYear +
            " " +
            movie.MpaRating +
            " " +
            formatDuration(movie.Duration)}
        </p>

        <p className="max-w-lg mt-1 text-[20px] text-white">{movie.Description}</p>

        <div className=' flex gap-3 mt-5'>
            <button className=" w-[200px] flex items-center justify-center gap-2 hover:scale-105 duration-300 h-[50px] bg-white text-black font-medium rounded-[40px] text-[25px]">
            <PlayCircleIcon/>
              
               Play

            </button>
            <button className=" w-[200px] hover:scale-105 duration-300 h-[50px] bg-blue-500 text-white font-medium rounded-[40px] text-[25px]">
                More Info

            </button>

        </div>

      </div>
    </div>
  );
};
