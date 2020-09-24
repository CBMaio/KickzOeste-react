import React from 'react';
import styled from 'styled-components';

const Button = (props) => {

    const { background, letterColor, text, icon } = props;

    return (


        <div className="d-flex justify-content-center">
            <BtnStyle 
                style = {{
                    background: `${background}`,
                    color: `${letterColor}`,
                }}

            href="#" className="btn btn-dark mb-4">{ text }
            { icon }
             </BtnStyle>
        </div>
    );
};

export default Button;

const BtnStyle = styled.span`{
    padding: .75rem 1rem;
    border-radius: 7px;
    font-weight: bolder;
}` 