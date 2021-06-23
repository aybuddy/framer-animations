import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
  --blue1: #0a1d37;
  --blue2: #293b5f;
  --blue3: #47597e;
  --blue4: #dbe6fd;
  --beige: #b2ab8c;
  --tan: #ffeedb;
  --pink: #ffd8cc;
  --creamsicle: #ffbd9b;

  --h1: 6.4rem;
  --h2: 4.8rem;
  --h3: 3.2rem;
  --h4: 2.4rem;
  --h5: 1.8rem;
  --h6: 1.6rem;
  --p: 1.6rem;

  // Fonts
  --serif: Georgia, serif;
  --sans-serif: Arial, sans-serif;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

body {
  line-height: 1;
  overflow-x: hidden;
  font-family: var(--sans-serif);
  font-weight: 400;
  background-color: var(--black);
  font-size: 1.6rem;
}

ul {
  list-style: none;
  list-style-type: none;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

a,
a:active,
a:hover,
a:visited,
a:link {
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--serif);
  letter-spacing: 2px;
}

h1 {
  font-size: var(--h1)
}
h2 {
  font-size: var(--h2)
}
h3 {
  font-size: var(--h3)
}
h4 {
  font-size: var(--h4)
}
h5 {
  font-size: var(--h5)
}
h6 {
  font-size: var(--h6)
}

p, li {
  letter-spacing: 1px;
  font-family: var(--sans-serif);
}

.app {
  height: 100vh;
  width: 100%;
}

.left-panel-background {
  height: 100vh;
  width: 50vw;
  position: absolute;
  z-index: 11;
}
.right-panel-background {
  height: 100vh;
  width: 50vw;
  position: absolute;
  right: 0;
  z-index: 11;
}

`;

export default GlobalStyle;
