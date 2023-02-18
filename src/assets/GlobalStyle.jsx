import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        box-sizing: border-box;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    .root{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    button{
        border: 0;
    }
    a{
        color: black;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-decoration: none;
    }
    a[href="/sign-up"], a[href="/"] {
        margin-top: 24px;
        text-decoration: underline;
    }
    *{
        box-sizing: border-box;
        font-family: 'Roboto';
        background-color: #F7E1D7;
    }
    header{
        height: 70px;
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding-left: 20px;
        padding-right: 20px;
        position: fixed;
        top: 0;
        z-index: 1000;
        background-color: #DB5B6E
        
    }

    header ion-icon{
        font-size: 24px;
        background-color: #DB5B6E
    }

    header div{
        display: flex;
        height: 100%;
        align-items: center;
        gap: 5px;
        background-color: #DB5B6E
    }
`

export default GlobalStyle