import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Row, Col} from 'reactstrap';
import {setColor, setColors} from './states/action.js';
import {store, storeColors} from './states/store.js';

export default class Reset extends React.Component{
    constructor(props){
        super(props);

        this.handleResetClick = this.handleResetClick.bind(this);
    }

    render(){
        
        return (
            /*<Row>
                <Col sm="12" md={{ size: 6, offset: 3 }} style={{textAlign: 'center'}}>
                    <Button onClick={this.handleResetClick}>Reset</Button>
                </Col>
            </Row>*/
            
                <div style={{textAlign: 'center', margin: '2rem'}}>
                    <Button onClick={this.handleResetClick}>Reset</Button>
                </div>
            
        );
    }

    handleResetClick(){
        store.dispatch(setColor());
        storeColors.dispatch(setColors(9));
        console.log("Reset Button cilck ");
    }
}