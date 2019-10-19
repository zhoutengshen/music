import styled from "styled-components";
import React from "react";

const NormalPlayBarWraper = styled.div`
    position:relative;
    height:10rem;
    .progress-bar{
        padding: 0 1.6rem;
    }
    
`;

export default (props) => {
    const { children } = props;
    return <NormalPlayBarWraper>
        <div className="progress-bar">

            {
                children
            }
        </div>
        <div>
            <div className="left"></div>
            <div className="mid"></div>
            <div className="right"></div>
        </div>
    </NormalPlayBarWraper>

}