import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './actions';

export default configureStore({ reducer: greetingReducer });
