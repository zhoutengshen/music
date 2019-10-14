import styled from "styled-components";

export const TopBarWraper = styled.div`
    display:flex;
    position: sticky;
    top: 0;
    left: 0;
    align-items: center;
    height:5rem;
    padding:0 0.8rem;
    box-sizing: border-box;
    justify-content:space-around;
    z-index:3;
    color:#fff;
    & .iconfont{
        font-size:25px;
    }
    &>.left{
        width:3.2rem;
        text-align:center;
    }
    &>.mid{
        flex:1;
        overflow:hidden;
        margin:0 0.8rem;
        .title{
            font-size:1.6rem;
            font-weight:600;
        }
        >.description{
            position:relative;
            white-space:nowrap;
            line-height:1.5;
            font-size:1.3rem;
            color:#eee;
        }
    }
    &>.right{
        &>i{
            display:inline-block;
            width:3.2rem;
            text-align:center;
        }
    }
`