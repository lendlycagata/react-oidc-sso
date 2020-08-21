import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import EventsPage from './EventsPage';
import Tasks from './Tasks';

import '../css/Header.css';

const Header = ({ loggedIn, logout, events, tasks }) => (
  <div className='App-header'>
    <header className='App-banner'>
      <h2>Engagement Application</h2>
      <h4>Telus International Digital Solution</h4>
    </header>
    <div className='Header-links'>
      {loggedIn ? (
        <LoggedInNav logout={logout} events={events} task={tasks} />
      ) : (
        <LoggedOutNav />
      )}
    </div>
  </div>
);

const LoggedInNav = ({ logout, events }) => (
  <>
    <NavLink to='/events'>Events</NavLink>
    <NavLink to='/tasks'>Tasks</NavLink>
    <NavLink to='/profile'>Home</NavLink>
    <Link to='/home' onClick={logout}>
      Logout
    </Link>
  </>
);

const LoggedOutNav = () => (
  <>
    <NavLink to='/login'>Login</NavLink>
  </>
);

export default Header;
