import styled from "styled-components";
export const ListWraper = styled.div`
    display:flex;
    width:100%;
    justify-content:space-around;
    flex-wrap:wrap;
    &>div{
        width: 32%;
    }
`;

export const RecommendListWraper = styled.div`
    border-top:.1rem solid #eee;
    padding:.8rem;
    margin-top:.8rem;
`;
export const TitleWrapper = styled.div`
    height:3.2rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 .4rem;
    .left{
        font-size:1.6rem;
        font-weight:900
    }
    .right{
        font-size:1.2rem;
        border:.1rem solid #eee;
        padding:.5rem 1rem;
        border-radius:2rem;
        color:#666;
    }
`;