import React from 'react';
import PrincipalTitle from './PrincipalTitle';
import Button from './Button';
import BoxList from './BoxList/BoxList';
import styled from 'styled-components';

const PrincipalPage = () => {
    return (
        <GreyBackground>
            <PrincipalTitle />
            <Button 
            background = 'black'
            letterColor = '#fff'
            text = 'Productos destacados'
            />
            <Button 
            background = 'white'
            letterColor = 'black'
            text = 'Contáctanos ahora'
            />
            <BoxList />

        </GreyBackground>
    );
};

export default PrincipalPage;

const GreyBackground = styled.div`{
    background: linear-gradient(180deg, #f6f6f6 80%, #ffffff 0);
}`