import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
    }
    body {
        -webkit-font-smoothing: antialiased !important;
        background: #333;
        font: 400 14px  Roboto, sans-serif;

    }
    textarea, input, button {
        font: 400 18px  Roboto, sans-serif;
    }
    a {
      text-decoration: none;
      margin: 0;
      padding: 0;
    }

    form input {
      width: 100%;
      height:60px;
      color: #333;
      border: 1px solid #dcdce6;
      border-radius: 8px;
      padding: 0 24px;
    }

    form textarea {
      width: 100%;
      min-height: 148px;
      color: #333;
      border: 1px solid #dcdce6;
      border-radius: 8px;
      padding: 16px 24px;
      line-height: 24px;
      resize: vertical;
    }

    button {
        cursor: pointer;
    }
`;
