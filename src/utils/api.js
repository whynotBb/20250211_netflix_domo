import axios from "axios";

// process.env > cra 로 프로젝트 연 경우
//vite 로 프로젝트 만든 경우, 환경변수는 import.meta.env. 로 가져올 수 있고, 변수 명 앞에 VITE_로 시작해야한다
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const api = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${API_KEY}`,
	},
});

// 요청 인터셉터 추가하기
axios.interceptors.request.use(
	function (config) {
		// 요청이 전달되기 전에 작업 수행
		return config;
	},
	function (error) {
		// 요청 오류가 있는 작업 수행
		return Promise.reject(error);
	}
);

// 응답 인터셉터 추가하기
axios.interceptors.response.use(
	function (response) {
		// 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
		// 응답 데이터가 있는 작업 수행
		return response;
	},
	function (error) {
		// 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
		// 응답 오류가 있는 작업 수행
		return Promise.reject(error);
	}
);
export default api;
