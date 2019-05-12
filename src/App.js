import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {Container, Row, Col, Card} from 'reactstrap';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import Navi from './Navi.js';
import Board from './Board.jsx';
import Slot from './Slot.js';
import Deck from './Deck.js';
import Reset from './Reset.js';
import {setColor} from './states/action';
import {color} from './states/reducer';
import store from './states/store';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.store = null;

    this.store = null;
    
  }

  componentWillMount(){
    this.store = createStore(color);
    store.subscribe(()=>{
      console.log("APP ", store.getState());
    });
    store.dispatch(setColor());
    

    this.color = store.getState();
    console.log("App color: ", this.color);
  }
  
  render(){
    return (
      <Provider store={store}>
        <div>
        <Navi />
        <Board /*color = {store.getState()}*/ />
        <Deck />
        <Reset />
        {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </header>
        </div> */}
      </div>
      </Provider>
      
    );
  }
}
