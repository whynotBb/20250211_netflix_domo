import { Swiper, SwiperSlide } from "swiper/react";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";
import MovieCard from "../../../../common/MovieCard/MovieCard";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const TopRatedMovieSlide = () => {
	const { data, isLoading, isError, error } = useTopRatedMoviesQuery();
	console.log("TopRatedMovieSlide", data);
	if (isLoading) return <h1>isLoading</h1>;
	if (isError) return <h1>{error.message}</h1>;
	return (
		<div>
			<h3>Top Rated Movies</h3>
			<div className="slide_wr">
				<Swiper
					slidesPerView={6}
					spaceBetween={10}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					{data.results.map((movie, idx) => (
						<SwiperSlide key={idx}>
							<MovieCard movie={movie} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default TopRatedMovieSlide;
