import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    return (
        <StyledBtnBox className="d-flex justify-content-center">
            <BtnStyle 
                style = {{
                    background: `${props.background}`,
                    color: `${props.letterColor}`
                }}

            href="#" className="btn btn-dark mr-2 mb-4">Productos destacados</BtnStyle>
        </StyledBtnBox>
    );
};

export default Button;

const StyledBtnBox = styled.div`{
    background: #f6f6f6;
    font-family: 'Spartan', sans-serif;
}`

const BtnStyle = styled.span`{
    padding: .75rem 1rem;
    border-radius: 7px;
    font-weight: bolder;
}` 