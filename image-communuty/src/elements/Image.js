import styled from "styled-components";
import React from "react";

const Image = (props) => {
    const{shape, src, size} = props;

    const styles ={
        src: src,
        size: size,
    }

    if(shape === "circle"){
        return(
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape === "rectangle"){
        return(
            <AspectOutter>
                <AsepectInner {...styles}></AsepectInner>
            </AspectOutter>
        );
    }

    return(
        <React.Fragment>
        </React.Fragment>
    );
}

Image.defaultProps = {
    shape: "circle",
    src: "https://dszw1qtcnsa5e.cloudfront.net/community/20201027/32e29b2d-7be4-46a9-9de3-ed707d8598f5/c67537a607e37016cd65de01fb4bf437.jpg",
    size: 36,
}

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
`;

const AsepectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;

`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
`;

export default Image;