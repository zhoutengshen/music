import styled from "styled-components";


export const TopBarWraper = styled.div`
    display:flex;
    position:relative;
    align-items: center;
    height:5rem;
    padding:0 0.8rem;
    justify-content:space-around;
    z-index:1;
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
            margin:0.4rem 0;
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