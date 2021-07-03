import axios from "../../utils/axios";
import { SET_USER, UPDATE_USER } from "./actionType";


export const get_user = () => async dispatch => {
    try {

        let result = await axios.get(`/getUser/${localStorage.getItem("id")}`);

        dispatch({ type: SET_USER, payload: result.data })

    } catch (error) {

    }
}
export const update_user = (key, value, userD) => async dispatch => {
    try {


        let userData = {
            user_name: key !== "user_name" ? userD.user_name : value,
            business_name: key !== "business_name" ? userD.business_name : value,
            currency: key !== "currency" ? userD.currency : value,
            phone_no: key !== "phone_no" ? userD.phone_no : value.toString()

        }
        await axios.put(`/sellregister/updateuser/${localStorage.getItem("id")}`, userData)
        dispatch({ type: UPDATE_USER, payload: userData })

    } catch (error) {
        console.log(error);
    }
}

