import styled from "styled-components";
export default styled.div`
     background:${({ theme }) => theme.palette['primary'].main};
     height:100%;
     .scroll-content{
          background:${({ theme }) => theme.palette['background'].default};
     }
`;