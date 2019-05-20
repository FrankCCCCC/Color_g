import {createStore, combineReducers} from 'redux';
import {color, colors} from './reducer.js';

/*
const comRedu = combineReducers({
    color,
    colors
});
*/

let store = createStore(color);
let storeColors = createStore(colors);

window.store = store;
window.storeColors = storeColors;
export {store, storeColors};