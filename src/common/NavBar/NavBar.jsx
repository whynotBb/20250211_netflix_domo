import { Link, useNavigate } from "react-router-dom";
import "./NavBar.style.css";
import { useState } from "react";
const NavBar = () => {
	const navigate = useNavigate();
	const [keyword, setKeyword] = useState("");
	// console.log(keyword);
	const searchByKeyword = (e) => {
		e.preventDefault();
		navigate(`/movies?q=${keyword}`);
		setKeyword("");
	};
	return (
		<div className="nav">
			<Link to="/" className="logo">
				logo
			</Link>
			<nav>
				<ul>
					<li
						onClick={() => {
							navigate("/");
						}}
					>
						Home
					</li>
					<li
						onClick={() => {
							navigate("/movies");
						}}
					>
						Movies
					</li>
				</ul>
			</nav>
			<form className="search_bx" onSubmit={(e) => searchByKeyword(e)}>
				<input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
				<button type="submit">search</button>
			</form>
		</div>
	);
};

export default NavBar;
