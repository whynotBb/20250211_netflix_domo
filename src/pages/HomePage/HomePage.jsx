// 1. 배너 : top 1위 영화로 보여주기
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie

import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import TopRatedMovieSlide from "./components/TopRatedMovieSlide/TopRatedMovieSlide";
import UpcomingMovieSlide from "./components/UpcomingMovieSlide/UpcomingMovieSlide";
import Banner from "./components/Banner/Banner";

const HomePage = () => {
	return (
		<div>
			<Banner />
			<PopularMovieSlide />
			<TopRatedMovieSlide />
			<UpcomingMovieSlide />
		</div>
	);
};

export default HomePage;
