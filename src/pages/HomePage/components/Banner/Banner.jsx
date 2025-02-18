import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import "./Banner.style.css";

const Banner = () => {
	const { data, isLoading, isError, error } = usePopularMoviesQuery();
	console.log(data);
	if (isLoading) {
		return <h1>loading</h1>;
	}
	if (isError) {
		return <h1>{error.message}</h1>;
	}
	return (
		<div className="banner" style={{ backgroundImage: `url(https://media.themoviedb.org/t/p/w533_and_h300_bestv2/${data.results[0].backdrop_path})` }}>
			<div>
				<h1>{data.results[0].title}</h1>
				<p>{data.results[0].overview}</p>
			</div>
		</div>
	);
};
export default Banner;
