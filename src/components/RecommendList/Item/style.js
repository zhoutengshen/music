import styled from "styled-components";
const ItemWraper = styled.div`
    display:flex;
    flex-direction:column;
    padding-top:.8rem;
    height:15rem;
    box-sizing:border-box;
    overflow:hidden;
    &>.img-wraper{
        position:relative;
        width:100%;
        height:12rem;
        border-radius:${({ theme }) => theme.shape.borderRadius};
        overflow:hidden;
        &>.count{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            box-sizing:border-box;
            padding-right:.4rem;
            line-height:1.6rem;
            text-align:end;
            background:linear-gradient(rgba(0,0,0,0.4),rgba(255,255,255,0));
            color:${({ theme }) => theme.palette.primary.contrastText};
            &>.icon{
                font-size:1.2rem;
                padding:0 .4rem;
            }
            &>.num{
                font-size:1.2rem;
            }
        }
        &>.img{
            width:100%;
            height:100%;
        }
    }
    &>.title{
        font-size:1.2rem;
        line-height:1.5rem;
        height:3rem;
        padding:0 .4rem;
        color:${({ theme }) => theme.palette.text.primary};
    }
`;
export default ItemWraper;