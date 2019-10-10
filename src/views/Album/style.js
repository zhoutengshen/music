import styled from "styled-components";

export const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:1000;
    background:#aaa;
`;
export const ImgCover = styled.div`
    position:absolute;
     background:${({ backgroundCoverUrl }) => "url(" + backgroundCoverUrl + ")"};
    background-size: cover;
    filter: blur(50px);
    height:100%;
    width:100%;
`