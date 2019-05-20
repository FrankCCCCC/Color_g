import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Row, Col} from 'reactstrap';
import {createStore} from 'redux';
import {connect} from 'react-redux';

import {setColor} from './states/action.js';
import {storeColors} from './states/store';
import './Board.css';

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: storeColors.getState().pickColor
        };
        console.log("Board Props Construct: ", this.props);
        console.log("Board state Construct: ", this.state);
    }

    static propTypes = {
        color: PropTypes.string
    };

    render(){
        console.log("Store in global ", storeColors.getState());
        console.log("Board Props: ", this.props);
        console.log("Board State: ", this.state);
        return (
            <div class='board'>
                <span class='pick'>{this.state.color}</span>
            </div>
        );
    }

    componentWillMount(){
        storeColors.subscribe(() => {
            this.setState({
                color: storeColors.getState().pickColor
            });
            
        });
    }
    componentDidMount(){
        
    }
}

function mapStateToProps(state){
    console.log("connect: ", state);
    console.log("connect State: ", state);
    return {
        ...state,
        color: state
    };
}

function mapDispatchToProps(dispatch){
    return {
        dipatch: () => dispatch(setColor()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);