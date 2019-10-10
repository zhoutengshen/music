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
        height:5rem;
        align-items:center;
        display:flex;
        .play-all{
            width:2.4rem;
            font-size:2.6rem;
            margin-left:-0.8rem;
            color:${({ theme }) => theme.palette.text.primary};
        }
        label{
            flex:1;
            font-size:1.7rem;
            line-height:1.5;
            margin-left:0.8rem;
            color:${({ theme }) => theme.palette.text.primary};
        }
        .clt{
            height: 3.5rem;
            line-height: 3.5rem;
            font-size: 1.4rem;
            background: ${({ theme }) => theme.palette.primary.light};
            border-radius: 20px;
            padding: 0 0.8rem;
            color:${({ theme }) => theme.palette.primary.contrastText};
            .iconplus,.clt-count{
                vertical-align:top;
            }
            .iconplus{
                display: inline-block;
            }
            .clt-count{
                vertical-align: top;
                display: inline-block;
                margin-right: 0.4rem;
                margin-top: -0.1rem;
            }

        }
    }
`