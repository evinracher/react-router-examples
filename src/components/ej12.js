import React, { useImperativeHandle } from 'react';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to='/' exact activeClassName='navActive'
      >
        HOME
      </NavLink>
      <NavLink
        to='/profile' activeClassName='navActive'
      >
        PERFIL
      </NavLink>
      <NavLink
        to='/login' activeClassName='navActive'
      >
        LOGIN
      </NavLink>
    </nav>
  )
}

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
    </div>
  )
}

const Login = (props) => {
  return (
    <h3>Login</h3>
  )
}

const Profile = () => {
  return (
    <h3>Profile</h3>
  )

}

const ImperativeNavigation = ({ history }) => {
  console.log(history)
  return (<div>
    <button onClick={history.goBack}>Back</button>
    <button onClick={history.goForward}>Go forward</button>
    <button onClick={() => {history.go(-2)}}>Go -2</button>
    <button onClick={() => {history.push('/profile')}}>Push profile</button>
    <button onClick={() => {history.replace('/profile')}}>Replace with profile</button>
  </div>)
}

function Example() {
  return (
    <BrowserRouter>
      <div>
        <h2>Using History</h2>
        <hr />
        <Navigation />
        <Route render={ImperativeNavigation} />
        <Route path='/' exact component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/login' component={Login} />
      </div>
    </BrowserRouter>
  )
}

export default Example;