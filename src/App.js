import logo from './logo.svg';
import './App.css';
import Profilcomp from './profil/profilcomp';
import picture from './profil/picture';
import { render } from '@testing-library/react';

function App() {
 
  return (
    <div>
    <Profilcomp name="zohra" age="26" profession="fullstack developer"/>
  <img src={picture}/>
  </div>
  
    );
}

export default App;
