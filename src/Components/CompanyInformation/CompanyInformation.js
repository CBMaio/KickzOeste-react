import React from 'react';
import TitleInformation from './TitleInformation';
import ProductsCards from './ProductsCards';
import ImgVans from '../../Image/vans-img.jpg';
import ImgAdidas from '../../Image/adidas.jpg';
import Button from '../PrincipalPage/Button';
import styled from 'styled-components';


const CompanyInformationSection = () => {
    return (
        <div className='container my-4'>
            <TitleInformation 
                title='Nuestra empresa'   
                subtitle='Venta de indumentaria, calzado y accesorios'
            />
            <div className="row">
                <ProductsCards 
                    imgLink= {ImgVans}
                    textImg='Tu estilo, tu marca'
                    paragraphImg='Pensando en vos'
                />
                <ProductsCards 
                    imgLink= {ImgAdidas}
                    textImg='Animate a más'
                    paragraphImg='Animate a Kickz Oeste'
                />
                <div className="col-md-4 d-flex align-items-center">
                    <TitleInformation 
                        title='Seamos nuestra mejor versión'   
                        subtitle='Las mejores marcas están acá... ¡No te quedes afuera!'
                        button= {
                            <FlexBoxContainer className="d-flex justify-content-center justify-content-md-start">
                                <Button 
                                    background = 'black'
                                    letterColor = '#fff'
                                    text = 'Quiero saber más'
                                    icon={<i className="icon ion-md-arrow-forward align-middle ml-2"></i>} 
                                />
                            </FlexBoxContainer>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default CompanyInformationSection;

const FlexBoxContainer = styled.div`{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
}`