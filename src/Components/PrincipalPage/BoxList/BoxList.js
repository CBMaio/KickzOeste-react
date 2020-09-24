import React from 'react';
import ListText from './ListText';
import ImageNike from '../../../Image/nike.jpg';
import styled, { keyframes } from 'styled-components';

    const BoxList = () => {

        const phrases = ['Envíos a todo el país', 'Indumentaria y calzado', 'Accesorios'];

        return (
            <div>
                <ul className="text-center mx-auto my-3 p-0">
   
                   {
                    phrases.map((prhase, index) => (
                        <ListText key = {index}
                                  text = {prhase}
                        />  
                    ))
                    }
                </ul>
                <div className="container col-12 col-md-4">
                    <StyleButton className="position-relative d-flex align-items-center justify-content-center border-0 p-0">
                        <PlayIcon className="position-absolute bg-white play-icon rounded-circle d-flex justify-content-center">
                            <i className="icon ion-md-play align-self-center"></i>
                        </PlayIcon>
                        <img className="w-100 my-4" src= {ImageNike } alt="Img zapatillas nike" />
                    </StyleButton>
                </div>
            </div>

        );
    
    };

export default BoxList;

const StyleButton = styled.div`{
    background: transparent;
}`;


const shadowButton = keyframes`
    0% {
        box-shadow: 0 0 0 0 rgba(255, 255, 255, .8);  
    }

    70%{
        box-shadow: 0 0 0 25px rgba(255, 255, 255, 0);      
    }

    100% {
        box-shadow: 0 0 0 25px rgba(255, 255, 255, 0);        
    }
`;

const PlayIcon = styled.div`{
    width: 5rem;
    height: 5rem;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, .5);
    color: black;
    animation: ${shadowButton} 1.5s infinite;
}`;