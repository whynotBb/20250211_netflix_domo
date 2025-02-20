import "./MovieCard.style.css";

const MovieCard = ({ movie }) => {
	return (
		<div className="slide_bx">
			<img src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="" />
			<div className="hover_bx">
				<h2>{movie.title}</h2>
				<p className="overview">📜{movie.overview}</p>
				<p className="release">📆{movie.release_date}</p>
				<p className="popularity">💜{movie.popularity}</p>
			</div>
		</div>
	);
};

export default MovieCard;
