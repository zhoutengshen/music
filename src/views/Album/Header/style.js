import styled from "styled-components";
export const HeaderWraper = styled.header`
    position:relative;
    display:flex;
    padding:1.6rem;
    &>.album-cover{
        position:relative;
        width:12rem;
        height:12rem;
        overflow:hidden;
        border-radius:5px;
        &>.cover-img{
            width:100%;
            height:100%;
        }
        &>.play-count{
            position:absolute;
            top: 0.4rem;
            right: 0.8rem;
            color:#fff;
            &>.iconfont{
                font-size:12px;
                margin-right:0.4rem;
            }
        }
    }
    &>.desc{
        flex:1;
        margin-left:1.6rem;
        flex-direction:column;
        &>.name{
                color: #fff;
                font-size: 1.6rem;
                line-height: 1.5;
        }
        &>.creator-info{
            line-height:3.5rem;
            &>.avatar{
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius:1.5rem;
                    vertical-align:middle;
            }
            &>.nickname{
                font-size: 1.5rem;
                color: #eee;
                vertical-align: middle;
                margin-left:0.6rem;
            }
            &>.iconright{
                color:#fff;
                vertical-align: middle;
                font-weight:100;
            }
        }
        &>.signature{
            display:flex;
            height:4rem;
            overflow:hidden;
            align-items:center;
            color:#ddd;
            &>p{
                line-height: 1.5;
                color: #ddd;
                font-size: 13px;
            }
        }
    }
`;