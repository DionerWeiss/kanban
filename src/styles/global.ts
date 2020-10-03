import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    background: var(--color-background);
  }

  *, button, input {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;
    outline: 0;
  }

  ul {
    list-style: none;
  }

  :root {
    --color-header: #FAA613;
    --color-button: #5aac44;
    --color-input: #e1e9ee;
    --color-icons: #5e6c84;
    --color-icons-hover: #172b4d;
    --color-hashtag: #7a8b98;
    --color-background: #f5f5f5;
    --color-ad-text: #434649;
    --color-panel: #fff;
    --color-link: #0073b1;
    --color-black: rgba(0,0,0,.9);
    --color-gray: rgba(0,0,0,.6);
    --color-separator: rgba(0,0,0,0.15);
    --color-white: #FFF;
  }
`;
