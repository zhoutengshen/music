import styled from "styled-components";


export const HeaderWraper = styled.header`
    display:flex;
    align-items: center;
    &>.left{
        width: 3.2rem;
        text-align:center;
    }
    &>.mid{
        display:flex;
        flex-direction:column;
        flex:1;
        >.description{
            white-space: nowrap;
        }
    }
    &>.right{
        width: 6.4rem; 
        &>i{
        }
    }
`