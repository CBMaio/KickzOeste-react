import React from 'react';
import TitleInformation from '../CompanyInformation/TitleInformation';
import SocialMediaLink from './SocialMediaLink';

const Contact = () => {
    return (
        <div className='container text-center py-4'>
            <TitleInformation
                title='Contacto'
                subtitle='Estamos para ayudarte'
            />
             <div className="row d-flex justify-content-center">
                <SocialMediaLink 
                    socialIcon = { <i className="icon ion-logo-instagram lead mr-3 align-middle"></i>}
                    redSocial = 'Instagram'
                />
                <SocialMediaLink 
                    socialIcon = {<i className="icon ion-logo-facebook lead mr-3 align-middle"></i>}
                    redSocial = 'Facebook'
                />
                <SocialMediaLink 
                    socialIcon = {<i className="icon ion-md-mail lead mr-3 align-middle"></i>}
                    redSocial = 'Mail'
                />
             </div>
        </div>

    )
}

export default Contact;

