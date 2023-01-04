import WeatherPage from '../../Pages/WeatherPage/WeatherPage';

import GlobalStyle from '../../Assets/CSS/GlobalStyle';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path={'/'} element={<WeatherPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
