import styled from "styled-components";
const ListWraper = styled.div`
    display:flex;
    width:100%;
    justify-content:space-around;
    flex-wrap:wrap;
    &>div{
        width: 32%;
    }
`;

export default ListWraper;