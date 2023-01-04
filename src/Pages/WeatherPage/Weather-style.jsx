import styled from 'styled-components';

export const Main = styled.div`
	width: 60%;
	height: max-content;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	border-radius: 10px;

	padding: 20px;
	box-sizing: border-box;

	h1 {
		margin: 10px;

		color: #ffffff;
	}

	background-color: blue;
`;

export const Painel = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;

	margin: 20px 0;

	color: #ffffff;

	font-size: 30px;

	.info-group {
		width: 100%;

		display: flex;
		justify-content: center;

		p:nth-child(2) {
			border-left: 3px solid #ffffff;
		}
	}

	span {
		vertical-align: middle;
	}

	p {
		display: flex;
		align-items: center;

		font-family: 'Ubuntu', sans-serif;
		font-weight: 900;

		padding: 0 20px;
		margin-bottom: 20px;
	}
`;

export const Form = styled.form`
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.input-group {
		width: 60%;

		display: flex;
		justify-content: center;

		padding: 20px 0;

		border-bottom: 2px solid #ffffff;

		input {
			width: 50%;
			height: 60px;

			text-align: center;

			font-size: 20px;

			border-radius: 10px;
			border: 0;
			background-color: #d4d4d4;

			padding: 10px;
			box-sizing: border-box;
		}

		svg {
			font-size: 25px;
		}

		button {
			width: 60px;
			margin: 0 10px;

			cursor: pointer;
		}
	}
`;
