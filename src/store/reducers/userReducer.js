
import { SET_USER, UPDATE_USER } from "../actions/actionType";


const initialState = {
    user: null,
    isAuth: false,

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                user: action.payload,
                isAuth: true
            }
        case UPDATE_USER:
            let payload = action.payload;
            let updated_user = { ...state.user, ...payload }

            return {
                ...state,
                user: updated_user
            }
        default:
            return state
    }
}

export default userReducer;