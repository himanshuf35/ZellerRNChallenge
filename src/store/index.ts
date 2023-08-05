/**
 * @author Himanshu Yadav
 * @email himanshumki@outlook.com
 * @create date 2022-07-12 16:16:59
 * @modify date 2023-08-04 21:53:08
 * @desc Redux store file
 */

import { applyMiddleware, compose, createStore } from "redux";
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import rootReducer from "./RootReducer";
import thunk from './ThunkMiddleware';

let middlewares = [thunk];

//Enable redux flipper plugin in dev mode
if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)) );

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useReduxDispatch = () => useDispatch<AppDispatch>();

export default store;
