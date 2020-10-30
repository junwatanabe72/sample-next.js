import { createStore } from 'redux';
import { userReducer } from './duck/MyButton/userReducer';

export const store = createStore(userReducer);
