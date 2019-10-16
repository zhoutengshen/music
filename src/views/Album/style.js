import styled from "styled-components";

export const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:1000;
    background:#aaa;
    overflow:auto;
    -webkit-overflow-scrolling: touch;
    transform-origin: right bottom;
`;
export const ImgCover = styled.div`
    position:fixed;
    width: 100%;
    height: 32rem;
    top: 0;
    left: 0;
    background:${({ backgroundCoverUrl }) => "url(" + backgroundCoverUrl + ")"};
    background-size: cover;
    filter: blur(60px) sepia(100%);
    
 
`