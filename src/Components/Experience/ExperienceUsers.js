import React from 'react';
import TitleInformation from '../CompanyInformation/TitleInformation';
import styled from 'styled-components';
import UserCard from './UserCard';
import User1 from '../../Image/face01.jpg';
import User2 from '../../Image/face02.jpg';
import User3 from '../../Image/face03.jpg';

const ExperienceUsers = () => {
    return (
        <BackgroundGreyBox className='container-fluid'>
            <TitleInformation
                title='Experiencia de usuarios'
                subtitle='Ellos ya decidieron confiar en nosotros'
            />
            <div className="container row d-flex justify-content-center mx-auto">
                <UserCard 
                    userName='María'
                    userExperience='Experiencia: '
                    userCity='Buenos Aires'
                    userPic = {User1}
                    userDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, mollitia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, laboriosam!'
                />
                <UserCard 
                    userName='Agustín'
                    userExperience='Experiencia: '
                    userCity='Pilar'
                    userPic = {User2}
                    userDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, mollitia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, laboriosam!'
                />
                <UserCard 
                    userName='Nicole'
                    userExperience='Experiencia: '
                    userCity='Mar del Plata'
                    userPic = {User3}
                    userDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, mollitia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, laboriosam!'
                />
            </div>
        </BackgroundGreyBox>
    );
};

export default ExperienceUsers;

const BackgroundGreyBox = styled.div`{
    background: #f6f6f6;
    padding: 6rem 0;
}`