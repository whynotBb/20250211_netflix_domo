import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

//home, /
// all,  /movies
// detail /movies/:id
// 리뷰 / movies/:id/reviews
function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					{/* ROute 안에 들어가는 route는 AppLayout 의 구성을 따른다 */}
					{/* path='/' 그대로 따른다는 뜻 = index */}
					<Route index element={<HomePage />} />
					<Route path="/movies">
						<Route index element={<MoviesPage />} />
						<Route path=":id" element={<MovieDetail />} />
					</Route>
				</Route>
				<Route path="*" element={<NotFoundPage />} />
				{/* path = '*' : 설정 된 path와 일치 하지 않는 경우 -> 404 보여주기 */}
				{/* <Route path='/admin' element={<AdminAppLayout />}/> // admin 이 다른 레이아웃을 가져갈 경우 */}
			</Routes>
		</div>
	);
}

export default App;
