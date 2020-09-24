import React from 'react';
import styled from 'styled-components';

const ProductsCards = (props) => {

    const { textImg, paragraphImg, imgLink} = props

    return(
        <div className="col-md-4">
            <ImgInfoBox className="position-absolute text-white">
                <ImgTextTitle className="font-weight-bold mb-0">{textImg}</ImgTextTitle>
                <ImgTextParagraph>{paragraphImg}</ImgTextParagraph>
            </ImgInfoBox>
            <img src={imgLink} alt="IMagen zapatillas" className="img-fluid mb-3" />
        </div>
    );
};

export default ProductsCards;

const ImgTextTitle = styled.h6`{
    font-size: 1.5rem;
}`;

const ImgTextParagraph = styled.p`{
    font-size: 20px;
}`;

const ImgInfoBox = styled.div`{
    bottom: 20px;
    left: 40px;
}`


