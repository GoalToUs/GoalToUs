import reset from 'styled-reset';
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`  
    ${reset}
    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }

    html,
        body {
        max-width: 100vw;
        overflow-x: hidden;
        font-family: 'Inter', sans-serif;
    }
    
    html {
        font-size: 62.5%;
    }
    
    
    a {
        color: inherit;
        text-decoration: none;
    }
    
    .non-clickable {
        pointer-events: none;
    }
`;

export default GlobalStyle;