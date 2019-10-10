import styled from "styled-components";
export const PlayerBarWraper = styled.div`
    position:fixed;
    display:flex;
    height:5rem;
    left:0;
    bottom:0;
    width:100vw;
    border:none;
    box-sizing:border-box;
    background:${({ theme }) => theme.palette['background'].default};
    z-index:${() => Number.MAX_SAFE_INTEGER};
    .left{
        width: 5rem;
        box-sizing: border-box;
        overflow: hidden;
        padding: 0.6rem;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    .mid{
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        min-width:0;
        .songName{
            font-size: 1.3rem;
            line-height: 1.5;
            white-space: nowrap;
            overflow:hidden;
            text-overflow: ellipsis;
            color:${({ theme }) => theme.palette.text.primary};
        }
        .lyrics{
            font-size: 1.2rem;
            line-height: 1.5;
            color:${({ theme }) => theme.palette.text.secondary};
        }
    }
    .right{
        width:9rem;
        svg{
            box-sizing: border-box;
            width:4rem !important;
            height:4rem;
            padding:0.6rem;
        }
    }
`;
