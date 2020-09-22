import React from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';

function Consoles() {
  return (
    <ul>
      <li>PS4</li>
      <li>XBOX</li>
      <li>Nintendo</li>
    </ul>
  )
}

function Computers() {
  return (
    <ul>
      <li>hp</li>
      <li>Asus</li>
      <li>Mac</li>
    </ul>
  )
}

function Home() {
  return (
    <div>
      <h2>HOME</h2>
    </div>
  )
}

const navStyles = {
  display: 'flex',
  justifyContent: 'space-around'
}

const navActive = {
  color: 'orangered'
}

const Navigation = () => {
  return (
    <nav style={navStyles}>
      <NavLink
        to='/' exact activeClassName='navActive'
      >
        HOME
      </NavLink>
      <NavLink
        to='/consoles' replace activeStyle={navActive}
      >
        CONSOLES
      </NavLink>
      <NavLink
        to='/computers' replace activeStyle={navActive}
        isActive={(match, location) => {
          return match ? match.isExact : false;
        }}
      >
        COMPUTERS
        </NavLink>
    </nav>
  )
}

function Example() {
  return (
    <BrowserRouter>
      <div>
        <h2>NavLink</h2>
        <Navigation />
        <hr />
        <h3>Products</h3>
        <Route path='/' exact component={Home} />
        <Route path='/consoles' component={Consoles} />
        <Route path='/computers:id?' component={Computers} />
      </div>
    </BrowserRouter>

  )
}

export default Example;