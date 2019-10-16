import { createGlobalStyle } from "styled-components";
const baseWidth = 375;
// const width = document ? document.documentElement.getBoundingClientRect() : 375;
const width = 375;
const baseFontSize = (width / baseWidth * 10) / 10000 * 10000;
export default createGlobalStyle`
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
	user-select:none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
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
html,body{
	/**
	rem布局=》1px === 0.1rem
	 */
	font-size:${baseFontSize}px;
}

/* //全局动画 */
.bottom-pop-enter, .bottom-pop-appear{
        transform: translate(0,100%);
    }
    .bottom-pop-enter-active, .bottom-pop-appear-active{
        transition: transform .3s;
        transform: translate(0,0);
    }
    .bottom-pop-exit{
        transform: translate(0,0);
    }
    .bottom-pop-exit-active{
        transition: transform .3s;
        transform: translate(0,100%);
}

.right-pop-enter, .right-pop-appear{
        transform: translate(100%,0);
    }
    .right-pop-enter-active, .right-pop-appear-active{
        transition: transform .3s;
        transform: translate(0,0);
    }
    .right-pop-exit{
        transform: translate(0,0);
    }
    .right-pop-exit-active{
        transition: transform .3s;
        transform: translate(100%,0);
}

.fade-enter, .fade-appear{
        opacity:0;
    }
    .fade-enter-active, .fade-appear-active{
        transition: all .2s;
        opacity:1;
    }
    .fade-exit{
        opacity:1;
    }
    .fade-exit-active{
        transition: all .2s;

        opacity:0;
    }

`;