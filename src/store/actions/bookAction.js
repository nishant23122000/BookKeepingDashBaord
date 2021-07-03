import axios from "../../utils/axios";
import { ADD_BOOK, SET_BOOK, UPDATE_BOOK, DELETE_BOOK } from "../actions/actionType";
export const getBook = () => async dispatch => {
    try {
        const result = await axios.get(`/getbook/${localStorage.getItem('id')}`);
        dispatch({
            type: SET_BOOK,
            payload: result.data.book
        })

    } catch (error) {
        console.log(error);
    }
}
export const add_book = (bookName) => async disaptch => {
    const date = new Date();
    let payload = date.toLocaleString().split(',');

    const data = {
        "book_id": Math.random(),
        "book_name": bookName,
        "date": payload[0],
        "time": payload[1],
        "offline_id": Math.random(),
    }

    try {
        await axios.post(`/sellregister/savebook/${localStorage.getItem("id")}`, data);
        disaptch({ type: ADD_BOOK, payload: data })
        window.location.reload();
    } catch (error) {
        console.log(error)
    }
}

export const delete_book = (id, user) => async dispatch => {



    try {

        await axios.delete(`/sellregister/deletebook/${id}/${localStorage.getItem("id")}`);
        dispatch({ type: DELETE_BOOK, payload: id });
    } catch (error) {
        console.log(error.response);
    }
}

export const update_book = (bookName, user, id) => async dispatch => {

    try {

        await axios.put(`/sellregister/updatebook/${id}/${localStorage.getItem("id")}`, {
            book_name: bookName,
            offline_id: id
        })
        dispatch({
            type: UPDATE_BOOK, payload: {
                bookName, id
            }
        })
    } catch (error) {
        console.log(error.response);
    }
}

