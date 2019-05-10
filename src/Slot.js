import React from 'react';
import ReactDOM from 'react-dom';
import {Card} from 'reactstrap';

export default class Slot extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333'}}>Here is Slot </Card>
        );
    }
}