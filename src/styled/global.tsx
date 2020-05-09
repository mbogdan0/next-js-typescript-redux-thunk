import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.default};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 19px;
    letter-spacing: -.00378rem;
    word-spacing: 0.05rem;
    line-height: 1.5;
  }
  a {
    color: #0000ee;
    border-bottom: 2px solid #0000ee;
    text-decoration: none;
    &:hover {
      color: #e63600;
      border-bottom: 2px solid transparent;
    }
    &:visited {
      color: #a400c4;
      border-bottom: 2px solid #a400c4;
    }
  }
  input, textarea {
    font-size: 19px;
    letter-spacing: -.00378rem;
    word-spacing: 0.05rem;
    box-sizing: border-box;
    -webkit-appearance: none;
    font-family: ${({ theme }) => theme.fonts.default};
    padding: 6px 8px;
    border: 2px solid ${({ theme }) => theme.colors.inputBorderColor};
    border-radius: 2px;
    &:focus {
      outline: none;
      border: 2px solid ${({ theme }) => theme.colors.inputBorderColorAccent};
    }
  }
  button {
    background: ${({ theme }) => theme.colors.buttonBackground};
    font-size: 19px;
    letter-spacing: -.00378rem;
    word-spacing: 0.05rem;
    box-sizing: border-box;
    -webkit-appearance: none;
    font-family: ${({ theme }) => theme.fonts.default};
    padding: 4px 16px;
    border: 2px solid ${({ theme }) => theme.colors.inputBorderColor};
    border-radius: 2px;
    cursor: pointer;
    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.buttonBorder};
    }
  }
`;
