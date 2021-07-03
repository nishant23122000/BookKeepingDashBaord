import axios from "../../utils/axios";
import { SET_FILTER, APPLY_FILTER, SET_RECORD } from "./actionType";
import { getBook } from "./bookAction";
export const save_purchase_record = (purchase_data, record_offline_id, edit, book_offline_id) => async dispatch => {

    try {
        if (edit) {

            // console.log(s_id)


            let res = await axios.put(`sellregister/updatedocument/456/${book_offline_id}/${localStorage.getItem("id")}`, purchase_data);

            window.location.reload();

        } else {

            await axios.post(`/sellregister/document/${book_offline_id}/${localStorage.getItem("id")}`, purchase_data);
            dispatch({ type: SET_RECORD, payload: purchase_data });
            dispatch(getBook());
            window.location.href = `/${book_offline_id}`;
        }

    } catch (error) {

    }
}
export const set_filter = (filterId, filterType, bookId) => dispatch => {
    dispatch({
        type: SET_FILTER, payload: {
            filterId, filterType
        }
    })
    dispatch({
        type: APPLY_FILTER
    })
}
