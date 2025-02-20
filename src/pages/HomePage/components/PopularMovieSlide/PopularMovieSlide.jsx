import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";

import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { homeMovieSlideResponsive } from "../../../../constants/resonsive";

const PopularMovieSlide = () => {
	const { data, isLoading, isError, error } = usePopularMoviesQuery();
	if (isLoading) return <h1>isLoading</h1>;
	if (isError) return <h1>{error.message}</h1>;
	return (
		<div>
			<MovieSlider title="Popular Movies" movies={data.results} responsive={homeMovieSlideResponsive} />
		</div>
	);
};

export default PopularMovieSlide;
