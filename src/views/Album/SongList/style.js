import styled from "styled-components";
export const ListWraper = styled.div`
    position: relative;
    background:${({ theme }) => {
        const { palette } = theme;
        return palette.background.default;
    }};
    padding:0 1.6rem;
    border-radius: 2rem 2rem 0 0;
    .header{
        height:4rem;
    }
`