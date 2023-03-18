
import './App.css';
import Profilcomp from './profil/profilcomp';
import picture from './image/picture.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function App() {
  const handleAlert = () => {
    alert(`welcome`);
  };
 
  return (
    
      <div className="App"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: '20rem' ,border :'3px solid black' }}>
      <Card.Body>
      <img src={picture} width="300px"/>
      <Profilcomp fullName="zohra najjar"  profession="fullstack developper" handleAlert={handleAlert}/>
    
    
      </Card.Body>
    </Card>
    
    
    
    


  </div>
  
    );
}

export default App;
