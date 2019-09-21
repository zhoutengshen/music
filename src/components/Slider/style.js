import styled from "styled-components";

export const SliderContainer = styled.div`
    position:relative;
    .swiper-container{
      position:relative;
      margin:0 .4rem;
      height:16rem;
      border-radius:${({ theme }) => theme.shape.borderRadius};
      --swiper-theme-color: ${({ theme }) => theme.palette.primary.main};
      --swiper-pagination-color:${({ theme }) => theme.palette.primary.contrastText};
    }
    &::before{
      content: "";
      position: absolute;
      display: block;
      height: 60%;
      width: 100%;
      background: ${({ theme }) => theme.palette.primary.main};
    }
`;