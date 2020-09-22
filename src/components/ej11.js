import React from 'react';
import { BrowserRouter, Route, NavLink, Link, Redirect } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to='/' exact activeClassName='navActive'
      >
        HOME
      </NavLink>
      <NavLink
        to='/profile' replace activeClassName='navActive'
      >
        PERFIL
      </NavLink>
      <NavLink
        to='/login' replace activeClassName='navActive'
      >
        LOGIN
      </NavLink>
    </nav>
  )
}

const isAuth = false;

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
    </div>
  )
}

const Login = (props) => {
  console.log(props);
  const { location } = props;
  if (location.state) {
    return <h3>{location.state.message}</h3>
  }
  return (
    <h3>Login</h3>
  )
}

const Profile = () => {
  return isAuth
    ? (
      <h3>Profile</h3>
    )
    : <Redirect to={{
      pathname: '/login',
      state: {
        message: 'You must login to access'
      }
    }} />
}

function Example() {
  return (
    <BrowserRouter>
      <div>
        <h2>Using Redirect component</h2>
        <hr />
        <Navigation />
        <Route path='/' exact component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/login' component={Login} />
        <Redirect from='/p' to='/profile'/>
      </div>
    </BrowserRouter>
  )
}

export default Example;