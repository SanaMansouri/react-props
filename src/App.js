import logo from './logo.svg';
import './App.css';
import Dot from './Dot';
import Profile from './Profile';

function App() {
  const fullName="Sana Mansouri"
  const proffession="Fullstack JS Developer"
  const bio="As a fullstack developer, I have expertise in both front-end and back-end web development."
  
  return (
    <div className="App">
      <header className="App-header">
      <div> 
     <Profile  name={fullName} prof={proffession} portfolio={bio} />
     </div>
     <Dot><img src={logo}/></Dot>    
      </header>
    </div>
  );
}

export default App;
