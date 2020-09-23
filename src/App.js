import React from 'react';
import styled from 'styled-components';
import NavbarNavegation from './Components/NavbarNavegation';
import PrincipalPage from './Components/PrincipalPage/principalPage';

function App() {
  return (
    <FontPage>
      <NavbarNavegation /> 
      <PrincipalPage />
    </FontPage>
  );
}

export default App;

const FontPage = styled.div`{
  font-family: 'Spartan', sans-serif;
}`