import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'reactstrap';
import {setColor} from './states/action.js';
import store from './states/store.js';

export default class Reset extends React.Component{
    constructor(props){
        super(props);

        this.handleResetClick = this.handleResetClick.bind(this);
    }

    render(){
        
        return (
            <Button onClick={this.handleResetClick}>Reset</Button>
        );
    }

    handleResetClick(){
        store.dispatch(setColor());
        console.log("Reset Button cilck ");
    }
}