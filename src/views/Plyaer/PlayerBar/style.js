import styled from "styled-components";
export const PlayerBarWraper = styled.div`
    position:fixed;
    height:5rem;
    left:0;
    bottom:0;
    width:100vw;
    border:none;
    box-sizing:border-box;
    background:red;
    z-index:${() => Number.MAX_SAFE_INTEGER};
`;
