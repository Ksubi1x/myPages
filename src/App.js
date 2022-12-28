
import './App.css';
import './fonts/Vilane Regular.ttf'
import './fonts/Vilane Medium.ttf'
import Header from './components/header/Header';
import Login from './components/loginPage/Login'
import Register from './components/registerPage/Register';
import Home from './components/homePage/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
      
        <div className="wrapper">
          <div className='container'>
            <Header />
            
          </div>
          <div className='content'>
            <Switch>
              <Route exact path='/' > 
                <div className='formContainer'>
                  <Login />
                </div>
              </Route>

              <Route path='/login' > 
                <div className='formContainer'>
                  <Login />
                </div>
              </Route>

              <Route path='/register'>
                <div className='formContainer'>
                  <Register />
                </div>
              </Route>

              <Route path='/home'>
                <Home />
              </Route>

            </Switch>
          </div>

          

        </div>
      </div>
    </Router>
    
  );
}

export default App;
