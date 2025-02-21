import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import "./MovieCard.style.css";

const MovieCard = ({ movie }) => {
	//  data: genreData 이름 재정의
	const { data: genreData } = useMovieGenreQuery();

	const showGenre = (genreIdList) => {
		if (!genreData) return [];
		const genreName = genreIdList.map((id) => {
			const genreObj = genreData.find((genre) => genre.id === id);
			return genreObj.name;
		});

		return genreName;
	};

	return (
		<div className="slide_bx">
			<img src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="" />
			<div className="hover_bx">
				<h2>{movie.title}</h2>
				<ul className="genre_wr">
					{movie.genre_ids.map((id, idx) => (
						<li key={idx}>
							{genreData?.map((genre) => {
								if (genre.id === id) {
									return genre.name;
								}
							})}
						</li>
					))}
				</ul>
				<ul className="genre_wr">
					{showGenre(movie.genre_ids).map((genre, idx) => (
						<li key={idx}>{genre}</li>
					))}
				</ul>
				<p className="overview">📜{movie.overview}</p>
				<p className="release">📆{movie.release_date}</p>
				<p className="popularity">💜{movie.popularity}</p>
			</div>
		</div>
	);
};

export default MovieCard;
