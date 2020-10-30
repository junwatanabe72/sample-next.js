import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Noto Sans JP', -apple-system, "Segoe UI", "Helvetica Neue",
            "Hiragino Kaku Gothic ProN", メイリオ, meiryo, sans-serif;
          color: black;
          background-color:white;
        }
        img,
        iframe {
          max-width: 100%;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: Montserrat, -apple-system, "Segoe UI", "Helvetica Neue",
            "Hiragino Kaku Gothic ProN", メイリオ, meiryo, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
`;
