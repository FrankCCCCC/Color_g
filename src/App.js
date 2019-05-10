import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Button from '@material-ui/core/Button';
//import Navi from './Navi.js';
/*import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
/*
<Navbar color="light">
        <NavbarBrand href="/">Color Game</NavbarBrand>
</Navbar>*/
import {Container, Row, Col, Card} from 'reactstrap';
import Navi from './Navi.js';
import Board from './Board.jsx';
import Slot from './Slot.js';
import Deck from './Deck.js';

function App() {
  return (
    <div>
      <Navi />
      <Board />
      <Deck />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    </div>
  );
}

export default App;
