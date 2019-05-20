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
            // <Row>
            //     <Col sm="12" md={{ size: 6, offset: 3 }}>
            //     <CardDeck>
            //         <Slot number={0} />
            //         <Slot number={1} />
            //         <Slot number={2} />
            //     </CardDeck>
            //     <div style={{height: '2rem'}}></div>
            //     <CardDeck>
            //         <Slot number={3} />
            //         <Slot number={4} />
            //         <Slot number={5} />
            //     </CardDeck>
            //     <div style={{height: '2rem'}}></div>
            //     <CardDeck>
            //         <Slot number={6} />
            //         <Slot number={7} />
            //         <Slot number={8} />
            //     </CardDeck>
            //     </Col>
            // </Row>

            <div class='deck'>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <CardDeck>
                        <Slot number={0} />
                        <Slot number={1} />
                        <Slot number={2} />
                    </CardDeck>
                    <div style={{height: '2rem'}}></div>
                    <CardDeck>
                        <Slot number={3} />
                        <Slot number={4} />
                        <Slot number={5} />
                    </CardDeck>
                    <div style={{height: '2rem'}}></div>
                    <CardDeck>
                        <Slot number={6} />
                        <Slot number={7} />
                        <Slot number={8} />
                    </CardDeck>
                    </Col>
                </Row>
            </div>
        );
    }
}