import styled from "styled-components";

export const ToolBarWraper = styled.ul`
    position: relative;
    display:flex;
    justify-content:space-around;
    align-items:center;
    height:6rem;
    box-sizing:border-box;
    padding: 0.8rem 0;
    a{
        color:#fff;
        text-decoration:none;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        span{
            font-size:1rem;
        }

    }
    .iconfont{
        font-size:2.5rem;
        margin-bottom:0.4rem;
    }
`;