import { combineReducers } from "redux";
import userReducer from "./userReducer";
import dataReducer from "./bookReducer";
export default combineReducers({
    user: userReducer,
    data: dataReducer,

})