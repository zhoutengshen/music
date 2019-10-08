import styled from "styled-components";

export const ToolBarWraper = styled.ul`
    position:relative;
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding: 0.8rem 0;
    a{
        color:#fff;
        text-decoration:none;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    .iconfont{
        font-size:25px;
        margin-bottom:0.4rem;
    }
`;