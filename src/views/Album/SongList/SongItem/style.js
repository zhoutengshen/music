import styled from "styled-components";
export const ItemWraper = styled.div`
    position:relative;
    display:flex;
    height:4rem;
    margin:1.6rem 0;
    .iconlaba{
        color:red !important;
        font-size:1.7rem !important;
        font-weight:900;
    }
    .left{
        font-size:1.6rem;
        line-height:4rem;
        width:2.4rem;
        color:${({ theme }) => theme.palette.text.secondary};
    }
    .mid{
        display:flex;
        flex:1;
        flex-direction:column;
        min-width: 0;
        color:${({ theme }) => theme.palette.text.primary};
        .p1{
            min-width:10rem;
        }
        .p2{
            min-width:8rem;
        }
        p{
            overflow:hidden;
            white-space:nowrap;
            text-overflow:ellipsis;
            line-height:1.5;
            .songName,.songAlia{
                font-size:1.6rem;
            }
            .songAlia{
                color:${({ theme }) => theme.palette.text.secondary};
            }
            .artistNames,.albumName{
                font-size:1.2rem;
                color:${({ theme }) => theme.palette.text.secondary};
            }
        }
    }
    .right{
        width:6.4rem;
        display:flex;
        justify-content:flex-end;
        align-items:center;
        color:${({ theme }) => theme.palette.text.secondary};
        .iconfont{
            flex:1;
            font-size:3rem  !important;
            text-align:end;
        }
    }
`;