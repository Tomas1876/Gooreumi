import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
import RegisterConditionPage from './pages/RegisterConditionPage';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route component={Home} path='/' exact />
      <Route component={LoginPage} path='/login' />
      <Route component={RegisterPage} path='/register' exact />
      <Route component={RegisterConditionPage} path='/condition' />

    </div>
  );
}

export default App;
