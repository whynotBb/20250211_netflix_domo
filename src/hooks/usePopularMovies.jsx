import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

// s: popular movies api 호출 hook
const fetchPopularMovies = () => {
	return api.get(`/movie/popular`);
};
export const usePopularMoviesQuery = () => {
	return useQuery({
		queryKey: ["movie-popular"],
		queryFn: fetchPopularMovies,
		select: (result) => result.data,
	});
};
// e: popular movies api 호출 hook
