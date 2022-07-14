import profileImage from './img/Poza_CV.jpg';
import './style/App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profileImage} alt={"profile-image"} className="profile_image"/>
        <h1>Clara - Maria Ciarnău</h1>
        <div>something</div>
      </header>
    </div>
  );
}

export default App;
