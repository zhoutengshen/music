import styled from "styled-components";
import style from "assets/global-style";
export const Top = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding:0.5rem 1rem;
    background:${style["theme-color"]};
    &>span{
        line-height:4rem;
        color:#f1f1f1;
        font-size:1.6rem;
        &.iconfont{
            font-size:2.5rem;
        }
    }
`;