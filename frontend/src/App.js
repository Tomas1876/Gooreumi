import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route component={Home} path='/' exact />
      <Route component={LoginPage} path='/login' />
      <Route component={RegisterPage} path='/register' />
    </div>
  );
}

export default App;
