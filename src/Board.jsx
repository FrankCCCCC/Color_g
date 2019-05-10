import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Badge} from 'reactstrap';

export default class Board extends React.Component{
    constructor(props){
        super(props);
        this.rgb = "(255, 255, 255)";
    }

    static propTypes = {
        rgb: PropTypes.string
    };

    render(){
        return (
        <div>
            <h1><Badge>{this.rgb}</Badge></h1>
        </div>
        );
    }

}