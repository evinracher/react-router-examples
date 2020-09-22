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

function Example() {
  return (
    <BrowserRouter>
      <div>
        <h2>Basic example of react router</h2>
        <hr/>
        <h3>Products</h3>
        <Route path='/consoles' component={Consoles}/>
        <Route path='/computers' component={Computers}/>
        <Route path='/computers' component={Computers}/>
      </div>
    </BrowserRouter>

  )
}

export default Example;