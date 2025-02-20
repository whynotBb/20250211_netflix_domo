import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../MovieCard/MovieCard";
import "swiper/css";
import "swiper/css/pagination";
const MovieSlider = ({ title, movies, responsive }) => {
	return (
		<div>
			<h3>{title}</h3>
			<div className="slide_wr">
				<Swiper
					spaceBetween={10}
					breakpoints={responsive}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					{movies.map((movie, idx) => (
						<SwiperSlide key={idx}>
							<MovieCard movie={movie} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default MovieSlider;
