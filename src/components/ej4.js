import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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

const Navigation = () => {
  return (<nav>
    <a href='/'>HOME</a> | 
    <a href='/consoles'>CONSOLES</a> | 
    <a href='/computers'>COMPUTERS</a>
  </nav>)
}

function Example() {
  return (
    <BrowserRouter>
      <div>
        <h2>Using links, reloading the page</h2>
        <Navigation />
        <hr />
        <h3>Products</h3>
        <Route path='/' exact component={Home} />
        <Route path='/consoles' component={Consoles} />
        <Route path='/computers' component={Computers} />
      </div>
    </BrowserRouter>

  )
}

export default Example;