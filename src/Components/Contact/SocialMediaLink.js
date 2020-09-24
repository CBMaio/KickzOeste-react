import React from 'react';
import styled from 'styled-components';

const SocialMediaLink = (props) => {

    const { socialIcon, redSocial } = props

    return (
        <SocialMediaBox className="col-lg-3 col-md-12 py-4 text-center container">
            <div>
                {/* <i className="icon ion-logo-instagram lead mr-3 align-middle"></i> */}
                {socialIcon}
                {redSocial}
            </div>
        </SocialMediaBox>
    );
};

export default SocialMediaLink;

const SocialMediaBox = styled.div`{
    color: black;
    border-bottom: 1px solid #ccc;
    background-color: #f6f6f6;
    width: 90%
}`
