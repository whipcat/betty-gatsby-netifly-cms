import { createGlobalStyle } from "styled-components"
import reset from 'styled-reset'

const theme = {
  color: "light-blue",
  font: {
    sans: 'Cambay, sans-serif',
    serif: 'Arvo, sans',
    monospace: '"Ubuntu Mono", monospace',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  fontWeight: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
}


const GlobalStyle = createGlobalStyle`
  ${reset}
  
  *, *:before, *:after {
      box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.font.monospace};
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: '#1a202c';
  }
  body {
    line-height: 1.5;
    letter-spacing: 0;
    background-color: ${({ theme }) =>
    theme.color === 'light-blue'
      ? 'lightblue'
      : '#f7fafc'};
    color: ${({ theme }) =>
      theme.color === 'lightblue'
        ? 'white'
        : 'black'
      };
  }
`
export {theme, GlobalStyle}