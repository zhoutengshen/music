import styled from "styled-components";



export const ImgCover = styled.div`
    position:fixed;
    width: 100vw;
    height:100vh;
    top: 0;
    left: 0;
    background:${({ backgroundCoverUrl }) => "url(" + backgroundCoverUrl + ")"};
    background-size: cover;
    filter: blur(200px);
`;

export const PlayerWraper = styled.div``;


export const FullSceenPlayerWraper = styled.div`
    position:fixed;
    display:flex;
    flex-direction:column;
    top:0;
    height:100vh;
    width:100vw;
    background:#999;
    z-index: 1000;

    .top-bar{
        display:flex;
        position: sticky;
        top: 0;
        left: 0;
        align-items: center;
        height:8rem;
        padding:0 0.8rem;
        box-sizing: border-box;
        justify-content:space-around;
        z-index:3;
        color:#fff;
        background:linear-gradient(0, transparent,rgba(0,0,0,0.5));
        padding-bottom:3rem;
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
                font-size:2rem;
                line-height: 1.5;
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
    }

    .record{
        position:relative;
        flex:1;
        height:calc(100vh - 23rem);
        z-index:1;
        .mid{
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding-top:10rem;
            .img{
                width: 60vw;
                height:60vw;
                border-radius:50%;
                border: 0.5rem solid #666;
                animation:imgrotate 10s linear infinite;
                @keyframes imgrotate{
                    0%{transform:rotate(0deg);}
                    25%{transform:rotate(90deg);}
                    50%{transform:rotate(180deg);}
                    75%{transform:rotate(270deg);}
                    100%{transform:rotate(360deg);}
                }
            }
        }
    }
    .buttom-bg{
        box-sizing:border-box;
        padding-top:4rem;
        background:linear-gradient(0, rgba(0,0,0,0.5),transparent);
        .tool-bar{
            position: relative;
            display:flex;
            justify-content:space-around;
            align-items:center;
            height:6rem;
            box-sizing:border-box;
            padding: 0.8rem 0;
            z-index:2;
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
        }
    }
    
`;

