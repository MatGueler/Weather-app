import { Painel, Form, Main } from './Weather-style';

import styled from 'styled-components';

import { AiOutlineSearch } from 'react-icons/ai';
import { MdPlace } from 'react-icons/md';
import { SiRainmeter } from 'react-icons/si';
import { BiWind } from 'react-icons/bi';
import { useState } from 'react';

function WeatherPage() {
	const [placeInfos, setPlaceInfos] = useState('');
	const [city, setCity] = useState('');
	const [mainWeather, setMainWeather] = useState('');

	async function getPlaceInfos(e) {
		e.preventDefault();
		const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}&lang=pt_br`;

		const res = await fetch(apiUrl);

		if (res.ok) {
			const data = await res.json();
			changeBackground(data);
			setPlaceInfos(data);
			setCity('');
		} else {
			alert('Cidade não encontrada!');
		}
	}

	function changeBackground(data) {
		MainWeathers.forEach((main) => {
			if (main.type === data.weather[0].main) {
				setMainWeather(main.url);
			}
		});
	}

	const MainWeathers = [
		{
			type: 'Thunderstorm',
			url: 'https://i.pinimg.com/originals/b5/1e/3f/b51e3f94807ad5e77402d86f0ac757f4.gif',
		},
		{ type: 'Drizzle', url: 'https://i.gifer.com/LdoL.gif' },
		{
			type: 'Rain',
			url: 'https://www.mkgifs.com/wp-content/uploads/2022/04/havy-rain.gif',
		},
		{
			type: 'Snow',
			url: 'https://25.media.tumblr.com/tumblr_mb6jl8AUkU1rha1i6o1_500.gif',
		},
		{
			type: 'Haze',
			url: 'https://media.tenor.com/5ImWLS5QAJgAAAAC/foggy-fog.gif',
		},
		{
			type: 'Clouds',
			url: 'https://i.pinimg.com/originals/6f/0a/ed/6f0aed74249f949bb74d6ac69e451fcf.gif',
		},
		{ type: 'Dust', url: 'https://i.gifer.com/P751.gif' },
		{
			type: 'Fog',
			url: 'https://i.pinimg.com/originals/77/42/24/77422432ef2ee5f1ffbd8828b1bca3b9.gif',
		},
		{
			type: 'Ash',
			url: 'https://thumbs.gfycat.com/PhysicalCostlyDamselfly-size_restricted.gif',
		},
		{
			type: 'Squall',
			url: 'https://media.tenor.com/XOQcVgcEOpYAAAAC/snow-squall-coldsnap.gif',
		},
		{
			type: 'Tornado',
			url: 'https://media.tenor.com/syq98TjCiusAAAAC/twister-tornado.gif',
		},
		{
			type: 'Clear',
			url: 'https://media.tenor.com/reA9KS4hEqsAAAAd/dandelion-nature.gif',
		},
		{ type: '', url: '' },
	];

	return (
		<Container weaterType={mainWeather}>
			<Main>
				<Form onSubmit={getPlaceInfos}>
					<h1>Pesquise a cidade para conferir o clima!</h1>
					<div className='input-group'>
						<input
							type='text'
							name='city'
							value={city}
							onChange={(e) => {
								setCity(e.target.value);
							}}
							required={true}
							minLength={3}
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
						<div className='description-group'>
							<img src={`http://openweathermap.org/img/wn/10d@2x.png`} alt='' />
							<p>{placeInfos.weather[0].description}</p>
						</div>
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
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: url(${(props) => props.weaterType});
	background-color: #7dd2ff;
`;

export default WeatherPage;
