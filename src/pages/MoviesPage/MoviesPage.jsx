// 1. navbar에서 클릭해서  온 경우
// 2. key word => key word 관련 화면 띄우기
// 2-1. 검색 결과 없으면, '검색결과없습니다'

// pagination : 클릭할때 마다 page 숫자 바꿔주고,
// page 바뀌면 fetch

import { useSearchParams } from "react-router-dom";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import MovieCard from "../../common/MovieCard/MovieCard";

import "./MoviesPage.style.css";

const MoviesPage = () => {
	const [query, setQuery] = useSearchParams();
	const keyword = query.get("q");
	const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword });
	console.log("search", data);
	if (isLoading) {
		return <h1>loading</h1>;
	}
	if (isError) {
		return <h1>{error.message}</h1>;
	}
	return (
		<div className="movies_page">
			<div className="filter_wr"></div>
			<div className="movie_wr">
				{data.map((movie, idx) => (
					<MovieCard movie={movie} key={idx} />
				))}
			</div>
		</div>
	);
};

export default MoviesPage;
