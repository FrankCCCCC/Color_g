import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardDeck, Row} from 'reactstrap';

import Slot from './Slot.js';

export default class Deck extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <CardDeck>
                <Slot/>
                <Slot/>
                <Slot/>
            </CardDeck>
            <CardDeck>
                <Slot/>
                <Slot/>
                <Slot/>
            </CardDeck>
            <CardDeck>
                <Slot/>
                <Slot/>
                <Slot/>
            </CardDeck>
            </div>
        );
    }
}