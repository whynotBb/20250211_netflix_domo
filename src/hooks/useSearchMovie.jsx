import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovie = ({ keyword, page }) => {
	console.log("fetchSearchMovie", keyword);

	return keyword ? api.get(`/search/movie?query=${keyword}`) : api.get(`/movie/upcoming?page=${page}`);
};

export const useSearchMovieQuery = ({ keyword, page }) => {
	console.log("aa", keyword);

	return useQuery({
		queryKey: ["movie-search", keyword, page],
		queryFn: () => fetchSearchMovie({ keyword, page }),
		select: (result) => result.data.results,
	});
};
