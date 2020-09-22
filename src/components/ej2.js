import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>HOME</h2>
    </div>
  )
}

function Consoles() {
  return (
    <ul>
      <li>PS4</li>
      <li>XBOX</li>
      <li>Nintendo</li>
    </ul>
  )
}

const Ps4 = () =>
  (<div>
    <h3>Ps4</h3>
    <p>Ps4 description</p>
  </div>)


function Computers() {
  return (
    <ul>
      <li>hp</li>
      <li>Asus</li>
      <li>Mac</li>
    </ul>
  )
}

function Example() {
  return (
    <BrowserRouter>
      <div>
        <h2>Basic example of react router, exploring the props</h2>
        <hr />
        <h3>Products</h3>
        <Route path='/' exact component={Home} />
        <Route path='/Consoles/' strict exact sensitive component={Consoles} />
        <Route path='/consoles/ps4' component={Ps4} />
        <Route path='/computers' component={Computers} />
        <Route path='/computers' component={Computers} />
      </div>
    </BrowserRouter>

  )
}

export default Example;