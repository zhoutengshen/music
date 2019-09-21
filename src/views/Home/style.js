import styled from "styled-components";
export const TopBar = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding:0.5rem 1rem;
    background:${({ theme }) => theme.palette['primary'].main};
    &>span{
        line-height:4rem;
        color:${({ theme }) => theme.palette['primary'].contrastText};
        font-size:1.6rem;
        &.iconfont{
            font-size:2.5rem;
        }
    }
`;
