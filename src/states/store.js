import {createStore} from 'redux';
import {color} from './reducer.js';

let store = createStore(color);

window.store = store;
export default store;