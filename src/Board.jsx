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
        this.state = {
            color: store.getState()
        };
        console.log("Board Props Construct: ", this.props);
        console.log("Board state Construct: ", this.state);
    }

    static propTypes = {
        color: PropTypes.string
    };

    render(){
        console.log("Store in global ", store.getState());
        console.log("Board Props: ", this.props);
        console.log("Board State: ", this.state);
        return (
        <div>
            <h1><Badge>{this.state.color}</Badge></h1>
        </div>
        );
    }

    componentWillMount(){
        store.subscribe(() => {
            this.setState({
                color: store.getState()
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