import React from 'react';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';

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

const ComputerCategory = ({ match }) => {
  console.log(match);
  return (
    <div>
      <h3>{match.params.category} Category</h3>
    </div>
  )
}

const Clothe = (props) => {
  console.log(props);
  const query = new URLSearchParams(props.location.search);
  const color = query.get('color');
  const size = query.get('size');

  return (
    <div>
      <h3>Clothe</h3>
      <div>
        Color: {color}
      </div>
      <div>
        Size: {size}
      </div>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h2>HOME</h2>
      <ul>
        <li>
          <Link to='/computers/gamers'>Gamers</Link>
        </li>
        <li>
          <Link to='/computers/home'>Home</Link>
        </li>
      </ul>
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
      <NavLink to='/clothe'>
        CLOTHE
        </NavLink>
    </nav>
  )
}

function Example() {
  return (
    <BrowserRouter>
      <div>
        <h2>Past information with query params</h2>
        <Navigation />
        <hr />
        <h3>Products</h3>
        <Route path='/' exact component={Home} />
        <Route path='/consoles' component={Consoles} />
        <Route path='/computers' exact component={Computers} />
        <Route path='/computers/:category/:id?' component={ComputerCategory} />
        <Route path='/clothe' component={Clothe} />
      </div>
    </BrowserRouter>

  )
}

export default Example;