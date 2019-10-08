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
		--color-main: ${props => props.theme.colors.main};
		--color-sidebar: ${props => props.theme.colors.sidebar}
		--color-body: ${props => props.theme.colors.body}
		--color-hover: ${props => props.theme.colors.hover}
		--color-focus: ${props => props.theme.colors.focus}
		--color-radial-1: ${props => props.theme.colors.radial_1}
		--color-radial-2: ${props => props.theme.colors.radial_2}
	}

	body {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		letter-spacing: 0.2em;
		color: var(--color-main);
	}

`;
