import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";

const Banner = () => {
	const { data } = usePopularMoviesQuery();
	console.log(data);

	return <div>Banner</div>;
};

export default Banner;
