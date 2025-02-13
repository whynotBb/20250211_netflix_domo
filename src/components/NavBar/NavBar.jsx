import { Link, useNavigate } from "react-router-dom";
import "./NavBar.style.css";
const NavBar = () => {
	const navigate = useNavigate();
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
			<div className="search_bx">
				<input type="text" />
				<button>search</button>
			</div>
		</div>
	);
};

export default NavBar;
