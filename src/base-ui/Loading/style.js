import styled from "styled-components";

export const Rect = styled.div`
    display:flex;
    width:${({ width }) => width || "100%"};
    height:${({ height }) => height || "100%"};
    justify-content: space-around;
    div {
        background-color: ${({ barColor }) => barColor || "#333"};
        height: 100%;
        flex:1;
        margin:0 3%;
        animation: sk-stretchdelay 1.2s infinite ease-in-out;
    }

    @keyframes sk-stretchdelay {
        0%, 40%, 100% { transform: scaleY(0.4) }  
        20% { transform: scaleY(1.0) }
    }
`

const scaleSize = (originSize, factor = 1) => {
    const size = parseFloat(originSize);
    const unit = originSize.replace(size, "");
    return (size * factor + unit).replace(" ", "");
}
// 容器宽高等于 方块半径两倍
export const Cube = styled.div`
    position: relative;
    margin: 0px auto;
    width: ${({ cubeSize = "1rem" }) => scaleSize(cubeSize, 2)};
    height: ${({ cubeSize = "1rem" }) => scaleSize(cubeSize, 2)};
    div{
        width: ${({ cubeSize = "1rem" }) => scaleSize(cubeSize, 0.7)};
        height:${({ cubeSize = "1rem" }) => scaleSize(cubeSize, 0.7)};
        background:${({ cubeColor = "#999" }) => cubeColor};
        position: absolute;
        top: 0;
        left: 0;
        border:0;
        animation: sk-cubemove 1.8s infinite ease-in-out;
    }
    @keyframes sk-cubemove {
    25% { 
        transform: ${({ cubeSize = "1rem" }) => "translateX(" + cubeSize + ") rotate(-90deg) scale(0.5)"};
    } 50% { 
        transform: ${({ cubeSize = "1rem" }) => "translateX(" + cubeSize + ") translateY(" + cubeSize + ") rotate(-179deg)"};
    } 50.1% { 
        transform: ${({ cubeSize = "1rem" }) => "translateX(" + cubeSize + ") translateY(" + cubeSize + ") rotate(-180deg)"};
    } 75% { 
        transform: ${({ cubeSize = "1rem" }) => "translateX(0px) translateY(" + cubeSize + ") rotate(-270deg) scale(0.5)"};
    } 100% { 
        transform: rotate(-360deg);
    }
}
`; 