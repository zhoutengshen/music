import styled from "styled-components";

export const PulldownTop = styled.div`
    position:absolute;
    top:${({ stop = 30 }) => -stop + 'px'};
    pointer-events: auto;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    color:#fff;
    font-size:1.6rem;
    height:${({ stop = 30 }) => stop + 'px'};
`;