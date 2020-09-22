import React, { useImperativeHandle } from 'react';
import { HashRouter, Route, NavLink, Link } from 'react-router-dom';

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



function Example() {
  return (
    <HashRouter>
      <div>
        <h2>Using HashRouter</h2>
        <hr />
        <Navigation />
        <Route path='/' exact component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/login' component={Login} />
      </div>
    </HashRouter>
  )
}

export default Example;