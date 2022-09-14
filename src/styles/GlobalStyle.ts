import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
	--bg: #18162f;
	--bgAccent: #0f0e17;
	--bgHighlight: #1e293b;
	--highlight: #f77f4f;
	--accent: #ffffff;
	--primary: #d4d3dc;

	font-family: Arial, Helvetica, sans-serif;
	font-size: 16px;
	color: var(--primary);
	background-color: var(--bg) ;
	line-height: 1.5rem;
	font-weight: 400;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	background-image: url("/gradient.svg");
	background-size: 50%;
	background-repeat: no-repeat;
	background-position: left center;
  }
`;
