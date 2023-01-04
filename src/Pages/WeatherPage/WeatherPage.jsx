import { Painel, Form, Main } from './Weather-style';

import { AiOutlineSearch } from 'react-icons/ai';
import { MdPlace } from 'react-icons/md';
import { SiRainmeter } from 'react-icons/si';
import { BiWind } from 'react-icons/bi';
import { useState } from 'react';

function WeatherPage() {
	const [placeInfos, setPlaceInfos] = useState('');
	const [city, setCity] = useState('');

	async function getPlaceInfos(e) {
		e.preventDefault();
		const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}&lang=pt_br`;

		const res = await fetch(apiUrl);

		if (res.ok) {
			const data = await res.json();
			console.log(data);
			setPlaceInfos(data);
			setCity('');
		}
	}

	return (
		<div className='container'>
			<Main>
				<Form onSubmit={getPlaceInfos}>
					<h1>Pesquise a cidade para conferir o clima!</h1>
					<img src='https://countryflagsapi.com/png/br' alt='' />
					<div className='input-group'>
						<input
							type='text'
							value={city}
							onChange={(e) => {
								setCity(e.target.value);
							}}
						/>
						<button>
							<AiOutlineSearch />
						</button>
					</div>
				</Form>
				{placeInfos ? (
					<Painel>
						<p>
							<MdPlace /> <span>{placeInfos.name}</span>
						</p>

						<p>{placeInfos.weather[0].description}</p>
						<p>{parseInt(placeInfos.main.temp)} &deg; C</p>
						<div className='info-group'>
							<p>
								<SiRainmeter /> <span>{placeInfos.main.humidity}%</span>
							</p>
							<p>
								<BiWind /> <span>{parseInt(placeInfos.wind.speed)} km/s</span>
							</p>
						</div>
					</Painel>
				) : (
					''
				)}
			</Main>
		</div>
	);
}

export default WeatherPage;
