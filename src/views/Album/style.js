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
    &.fly-enter, &.fly-appear{
        transform: translate3d(100%, 0, 0);
    }
    &.fly-enter-active, &.fly-appear-active{
        transition: transform .3s;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit{
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit-active{
        transition: transform .3s;
        transform: translate3d(100%, 0, 0);
    }
`;
export const ImgCover = styled.div`
    position:fixed;
    width: 100%;
    top: 0;
    left: 0;
    background:${({ backgroundCoverUrl }) => "url(" + backgroundCoverUrl + ")"};
    background-size: cover;
    filter: blur(50px);
    height: 32rem;
 
`