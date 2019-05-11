import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Badge} from 'reactstrap';
import {createStore} from 'redux';
import {connect} from 'react-redux';

import {setColor} from './states/action.js';
import store from './states/store';

class Board extends React.Component{
    constructor(props){
        super(props);
        
        this.color = store.getState();
        this.State = {
            color: store.getState()
        };
        console.log("Board Props: ", this.props);
        console.log("Board state: ", this.state);
        console.log("Board: ", this.color);

        store.subscribe(() => {
            const newState = store.getState();
            //this.props.color = store.getState();
            console.log("Store in global ", store.getState());
            console.log("Board Props: ", this.props);
            console.log("Board State: ", this.state);
            this.setState({
                color: newState
            });
            //ReactDOM.render();
        });
    }

    static propTypes = {
        color: PropTypes.number
    };

    render(){
        return (
        <div>
            <h1><Badge>{this.color}</Badge></h1>
        </div>
        );
    }

    componentWillMount(){
        
    }
}

export default connect((state) => {
    console.log("connect: ", state);
    console.log("connect State: ", state);
    return {
        ...state,
        color: state
    };
})(Board);