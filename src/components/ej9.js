import React from 'react';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';
import queryString from 'query-string';
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
  const query = queryString.parse(props.location.search);

  return (
    <div>
      <h3>Clothe</h3>
      <div>
        Color: {query.color}
      </div>
      <div>
        Size: {query.size}
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
        <h2>Using query string library</h2>
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