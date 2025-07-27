import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const TrendingNowSection = ({ trendingData, onMovieClick }) => {
  return (
    <div className="mt-4 max-w-[1920px] w-full px-28 overflow-x-hidden">
      <h1 className="text-xl font-bold text-white mb-4">Trending Now</h1>
      <Swiper
        spaceBetween={16}
        slidesPerView="8" 
      >
        {trendingData.map((item) => (
          <SwiperSlide
            key={item.Id}
            className="!w-[200px]"
          >
            <div
              className="text-white rounded p-1 shadow cursor-pointer hover:bg-gray-700 transition"
              onClick={() => onMovieClick(item)}
            >
              <img
                src={`/assets/${item.CoverImage}`}
                alt={item.Title}
                className="w-full h-60 object-cover rounded"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
