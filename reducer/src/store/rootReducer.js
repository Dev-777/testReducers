import { combineReducers } from 'redux';
import {reducerOne} from './reducerOne/reducerOne';
import {reducerTwo} from './reducerTwo/reducerTwo';


export default combineReducers({
   root:  reducerOne,
   signUp: reducerTwo,
})