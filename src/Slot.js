import React from 'react';
//import ReactDOM from 'react-dom';
//import {Card} from 'reactstrap';
import {storeColors, store} from './states/store.js'
import {pickCorrect} from './states/action.js';
import './Slot.css';

export default class Slot extends React.Component{
    constructor(props){
        super(props);

        this.handleSlotClick = this.handleSlotClick.bind(this);

        console.log(props.number);
        console.log(storeColors.getState());
        this.state = {
            color: storeColors.getState().colors[this.props.number],
            shadow: storeColors.getState().shadows[this.props.number]
        };
    }

    componentWillMount(){
        storeColors.subscribe(() => {
            console.log("Mount: ", storeColors.getState());
            this.setState({
                color: storeColors.getState().colors[this.props.number],
                shadow: storeColors.getState().shadows[this.props.number]
            });
            console.log("StoreColors: ", storeColors.getState());
        });
        
    }

    render(){
        console.log(this.state);
        return(
            // <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333'}}>Here is Slot </Card>
            <div class='card' style={{backgroundColor: this.state.color, boxShadow: this.state.shadow}} onClick={this.handleSlotClick}></div>
        );
    }

    handleSlotClick(){
        if(this.state.color === storeColors.getState().pickColor){
            console.log("Correct");
            storeColors.dispatch(pickCorrect());
        }else{
            console.log("Incorrect");

            return;
        }
    }
}