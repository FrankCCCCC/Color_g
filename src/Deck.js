import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardDeck, Row, Col} from 'reactstrap';

import Slot from './Slot.js';
import './Deck.css';

export default class Deck extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                <CardDeck>
                    <Slot/>
                    <Slot/>
                    <Slot/>
                </CardDeck>
                <div style={{height: '2rem'}}></div>
                <CardDeck>
                    <Slot/>
                    <Slot/>
                    <Slot/>
                </CardDeck>
                <div style={{height: '2rem'}}></div>
                <CardDeck>
                    <Slot/>
                    <Slot/>
                    <Slot/>
                </CardDeck>
                </Col>
            </Row>
        );
    }
}