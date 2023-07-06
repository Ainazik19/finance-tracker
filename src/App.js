import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
//styles
import './App.css'
//pages and components
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import Navbar from './components/Navbar'
 
function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path='/'>
            {!user && <Redirect to='/login' />}
            {user && <Home />}
          </Route>
          <Route path='/login'>
            {user && <Redirect to='/' />}
            {!user && <Login />}
          </Route>
          <Route path='/signup'>
            {user && <Redirect to='/' />}
            {!user && <Signup />}
          </Route >
        </Switch>
      </BrowserRouter>
      )}
    </div>
 
  );
}
export default App
