import React from 'react';
import { BrowserRouter, Route, NavLink, Link, Switch } from 'react-router-dom';


const Videos = () => {
  return (
    <div>
      <h2>Videos</h2>
    </div>
  )
}

const Playlist = () => {
  return (
    <div>
      <h2>Playlist</h2>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
    </div>
  )
}

function Example() {
  return (
    <BrowserRouter>
      <div>
        <h2>Using Switch component</h2>
        <hr />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/videos' component={Videos} />
          <Route path='/videos' component={Playlist} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Example;