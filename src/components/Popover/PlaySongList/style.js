import styled from "styled-components";

export const PlaySongListItemWraper = styled.div`
    display:flex;
    padding: 1rem 0;
    min-width:0;
    align-items:center;
    .iconlaba{
        margin-right:0.8rem;
        font-size:1.8rem;
    }
    .isSelect{
        color:red !important;
    }
    .hiddent{
        display:none
    }
    p{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 1.5;
    }
    .songName{
        font-size:1.6rem;
        color:${({ theme }) => theme.palette.text.primary};
    }
    .artistNames{
        font-size:1.2rem;
        color:${({ theme }) => theme.palette.text.secondary};
    }
`;

export const PlaySongListWraper = styled.div`
    position: fixed;
    box-sizing:border-box;
    bottom: 0;
    max-height: 65vh;
    padding:1.6rem;
    padding-top:0;
    background:#fff;
    border-radius:2rem 2rem 0 0;
    width:100vw;
    -webkit-overflow-scrolling: touch;
`;

export const HeaderWraper = styled.div`
    position:sticky;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background:#fff;
    height:4rem;
    top:0;
    z-index:1;
    .left,.right{
        color:${({ theme }) => theme.palette.text.secondary};
        .iconloop{
            font-size:3rem !important;
            vertical-align: middle;
        }
        .iconshoucang,.icondelete{
            font-size:2rem !important;
            vertical-align: middle;
        }
        .disc{
            font-size: 1.8rem;
            vertical-align: middle;
            margin:0 0.8rem;
        }
    }
`;