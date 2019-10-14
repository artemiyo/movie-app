import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}

	html {
		font-size: 62.5%;
		box-sizing: border-box;
	}

	body {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		letter-spacing: 0.2em;
		color: ${props => props.theme.colors.main};
	}
`;
