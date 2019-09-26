import styled from "styled-components";
export const TopBar = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding:0.4rem 0.8rem;
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


export const Tab = styled.nav`
    display:flex;
    width:100%;
    background:${({ theme }) => theme.palette['primary'].main};
    flex-direction:row;
    justify-content:space-around;
`;

export const TabItem = styled.div`
    a {
        position: relative;
        box-sizing:border-box;
        line-height: 4rem;
        font-size: 1.5rem;
        text-decoration: none;
        font-weight: 100;
        padding: 0  2rem  .4rem  2rem;
        color:${({ theme }) => theme.palette.primary.contrastText};
        &.selected{
            font-weight:700;
            border-bottom:.2rem solid #fff;
        }
    }
`;

