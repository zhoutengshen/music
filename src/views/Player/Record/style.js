import styled from "styled-components";
export const RecordWraper = styled.div`
    position:relative;
    height:calc(100vh - 23rem);
    z-index:1;
    .mid{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-top:10rem;
        .img{
            width: 60%;
            border-radius:50%;
            border: 0.5rem solid #666;
            animation:imgrotate 10s linear infinite;
            @keyframes imgrotate{
                0%{transform:rotate(0deg);}
		        25%{transform:rotate(90deg);}
		        50%{transform:rotate(180deg);}
		        75%{transform:rotate(270deg);}
		        100%{transform:rotate(360deg);}
            }
        }
    }

`;