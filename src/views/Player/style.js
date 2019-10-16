import styled from "styled-components";


export const PlayerWraper = styled.div`
    height:100vh;
    width:100vw;
    background:#999;
`

export const ImgCover = styled.div`
    position:fixed;
    width: 100vw;
    height:100vh;
    top: 0;
    left: 0;
    background:${({ backgroundCoverUrl }) => "url(" + backgroundCoverUrl + ")"};
    background-size: cover;
    filter: blur(60px) sepia(100%);
 
`