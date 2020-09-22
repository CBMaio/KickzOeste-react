import React from 'react';
import NavbarNavegation from './Components/NavbarNavegation';
import PrincipalTitle from './Components/PrincipalTitle';
import Button from './Components/Button'

function App() {
  return (
    <div>
      <NavbarNavegation /> 
      <PrincipalTitle />
      <Button 
        background = 'black'
        letterColor = '#fff'
      />
      <Button 
        background = 'white'
        letterColor = 'black'
      />
    </div>
  );
}

export default App;

