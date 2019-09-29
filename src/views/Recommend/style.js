import styled from "styled-components";
export default styled.div`
     background:${({ theme }) => 'linear-gradient(' + theme.palette['primary'].main + ' 50% ,' + theme.palette['background'].default + ' 50% )'};
     height:100%;
     .scroll-content{
          background:${({ theme }) => theme.palette['background'].default};
     }
`;