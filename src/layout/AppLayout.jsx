import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const AppLayout = () => {
	return (
		<div>
			<NavBar />
			<Outlet />
		</div>
	);
};

export default AppLayout;
