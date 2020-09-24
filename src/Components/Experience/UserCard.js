import React from 'react';
import styled from 'styled-components';

const UserCard = (props) => {

    const {userPic, userName, userExperience, userCity, userDescription} = props

    return(
        <div className="col-lg-4">
            <div className="card border-0 my-3">
                <div className="bg-white card-header card-client">
                    <ImgStyle src={userPic} alt="Peril cliente" className="card img-top" />
                    <h5 className="font-weight-bold mb-3">{userName}</h5>
                    <h5 className="font-weight-bold mb-4">{userExperience}</h5>
                    <CityText className="">{userCity}</CityText>
                </div>
                <div className="card-body">
                    <p className="p-2 text-muted"><i className="icon ion-md-checkmark mr-2"></i>{userDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default UserCard;

const ImgStyle = styled.img`{
    width: 100px;
    float: right;
    box-shadow: 0 0 2px rgba(0, 0, 0, .5);
}`;

const CityText = styled.span`{
    padding: .5rem 1rem;
    background-color: #f6f6f6;
    color: black;
    margin-top: 2rem;
    font-size: 15px;
}`
