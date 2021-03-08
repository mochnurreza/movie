import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { login, logout, selectUser } from './userAction/userAction';
import { useEffect } from 'react';
import Profile from './components/Profile';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
        email: userAuth.email,
        }))
      } else {
        dispatch(logout())
      }
    })
    return unsubscribe
  }, [dispatch])
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login/>
        ) : (
          <Switch>
              <Route exact path='/'>
              <Home/>
              </Route>
              <Route path='/profile'>
                <Profile/>
              </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
