import React from 'react';
import styled from 'styled-components';
import NavbarNavegation from './Components/NavbarNavegation';
import PrincipalPage from './Components/PrincipalPage/principalPage';
import CompanyInformation from './Components/CompanyInformation/CompanyInformation';
import ExperienceUsers from './Components/Experience/ExperienceUsers';
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <FontPage>
      <NavbarNavegation /> 
      <PrincipalPage />
      <CompanyInformation />
      <ExperienceUsers />
       <Contact /> 
    </FontPage>
  );
}

export default App;

const FontPage = styled.div`{
  font-family: 'Spartan', sans-serif;
}`