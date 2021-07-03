import { SET_USER } from "./actionType";
import axios from "../../utils/axios";
import { getBook } from "./bookAction";
export const login_user = (userData) => async dispatch => {
    try {
        let user = await axios.get(`/getUser/${userData.user.uid}`);
        localStorage.setItem("id", userData.user.uid);

        if (user.data.user_id) {

            dispatch({ type: SET_USER, payload: user.data })
        } else {
            const result = await axios.post(`/sellregister/saveuser/${userData.user.uid}`, {
                phone_no: userData.user.phoneNumber,
                refreshToken: userData.user.refreshToken
            })

            dispatch({ type: SET_USER, payload: result.data })

        }

        window.location.href = "/";
    } catch (error) {

    }
}

export const get_user_status = () => async dispatch => {

    try {

        let result = await axios.get(`/getUser/${localStorage.getItem("id")}`);

        if (result.data.user_id != null) {
            dispatch({ type: SET_USER, payload: result.data });
            dispatch(getBook());
        }


    } catch (error) {
        console.log(error)
    }

}