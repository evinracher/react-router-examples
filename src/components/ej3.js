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

function Example() {
  return (
    <BrowserRouter>
      <div>
        <h2>Rendering componentes</h2>
        <hr />
        <h3>Products</h3>
        <Route path='/' exact component={Home} />
        <Route path='/consoles' render={Consoles} />
        <Route path='/computers' component={Computers} />
        <Route path='/computers'>
          <Computers />
        </Route>
      </div>
    </BrowserRouter>

  )
}

export default Example;