import { legacy_createStore as CreateStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import usersReducer from './usersReducer'

const store = CreateStore(
    usersReducer,
    applyMiddleware(thunk)
);
export default store;
