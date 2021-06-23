import { combineReducers } from 'redux';
import { items } from './items';
import {newItems} from "./newItems";

export default combineReducers({
    items,
    newItems,
});