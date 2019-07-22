import { createGlobalStyle } from 'styled-components'
import fontawesomeTTF from './fonts/fontawesome-webfont.ttf'
import fontawesomeWOFF from './fonts/fontawesome-webfont.woff'
import fontawesomeWOFF2 from './fonts/fontawesome-webfont.woff2'
import fontawesomeEOT from './fonts/fontawesome-webfont.eot'
const Global = createGlobalStyle`
    @font-face {
        font-family: 'FontAwesome';
        src: url('${fontawesomeTTF}') format("truetype"),
        url('${fontawesomeWOFF}') format("woff"),
        url('${fontawesomeWOFF2}') format("woff2"),
        url('${fontawesomeEOT}') format("eot");
    }
    body {
        margin: 0px;
    }
    #root {
        color: #444;
        background-color: #e6ecf0;
        font-family: sans-serif;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
    }
`
export { Global }