
import './App.css';
import './fonts/Vilane Regular.ttf'
import './fonts/Vilane Medium.ttf'
import Header from './components/header/Header';
import Login from './components/loginPage/Login'


function App() {
  return (
    <div className="App">

      <div className="wrapper">
        <div className='container'>
          <Header />
          

        </div>

        <div className='formContainer'>
          <Login />
        </div>

      </div>
    </div>
  );
}

export default App;
