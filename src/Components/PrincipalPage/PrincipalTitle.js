import React from 'react';
import styled from 'styled-components';

const PrincipalTitle = () => {

    return (
            <FlexboxContainer className="container-fluid">
                <div className="text-center mx-auto mt-5">
                    <Title>Hype & Streetwear</Title>
                    <h2 className="mb-3 font-weight-bold letterStyleTitle">Kickz Oeste</h2> 
                    <p className="lead text-muted pb-5 w-75 my-0 mx-auto">Productos 100% Originales</p>
                </div>
            </FlexboxContainer>
    );
};

export default PrincipalTitle;

const FlexboxContainer = styled.div`{
    font-family: 'Spartan', sans-serif;
    display: flex;
    align-items: center;
}`;

const Title = styled.h1`{
    font-weight: 300;
}`