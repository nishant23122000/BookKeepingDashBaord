import { ADD_BOOK, SET_BOOK, DELETE_BOOK, UPDATE_BOOK, SET_FILTER, SET_RECORD, APPLY_FILTER } from "../actions/actionType";


const initialState = {
    books: [],
    bookRecords: [],
    filter: {},
    filterRecord: null,
    activeId: null
}


const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOK:

            return {
                ...state,
                books: action.payload,
            }
        case ADD_BOOK:
            let updated_book = [...state.books, action.payload];
            return {
                ...state,
                books: updated_book
            }
        case DELETE_BOOK:
            let updated_books = state.books.filter((book) => book.offline_id !== action.payload);
            return {
                ...state,
                books: updated_books
            }
        case UPDATE_BOOK:
            let update_books = state.books;
            let new_book = update_books.find((book) => book.offline_id === action.payload.id);
            new_book = { ...new_book, book_name: action.payload.bookName }
            update_books = update_books.filter((book) => book.offline_id !== action.payload.id);
            update_books = [...update_books, new_book]
            return {
                ...state,
                books: update_books
            }
        case "SET_RECORD_WITH_ID":

            let books = state.books;
            let book = books.find((book) => book.offline_id === action.payload);
            let bookRecords = book.sellbook;
            bookRecords.sort((a, b) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            })
            return {
                ...state,
                activeId: action.payload,
                bookRecords: bookRecords,
                filterRecord: bookRecords
            }
        case SET_RECORD:
            let bookRecord = state.bookRecords;
            bookRecord = [...bookRecord, action.payload];

            return {
                ...state,
                bookRecords: bookRecord,
                filterRecord: bookRecord,
            }
        case SET_FILTER:
            let currentFilter = state.filter;
            let filterConfig = action.payload;
            if (filterConfig.filterType === "entity")
                currentFilter.entity = filterConfig.filterId
            else if (filterConfig.filterType === "date")
                currentFilter.date = filterConfig.filterId
            else if (filterConfig.filterType === "payment")
                currentFilter.payment = filterConfig.filterId
            else
                currentFilter.search = filterConfig.filterId

            return {
                ...state,
                filter: currentFilter
            }
        case APPLY_FILTER:
            let filterRecord = state.bookRecords;
            let filter = state.filter;

            for (const key in filter) {
                if (key == "entity") {
                    if (filter[key] == 1)
                        filterRecord = filterRecord.filter((data) => data.sell === "purchase")
                    else
                        filterRecord = filterRecord.filter((data) => data.sell === "sell")
                } else if (key == "search") {
                    let val = filter[key];
                    filterRecord = filterRecord.filter((data) => data.product_name.startsWith(val) || data.person.startsWith(val))
                } else if (key == "date") {
                    if (filter[key] == 1) {
                        let newDate = new Date()
                        let date = newDate.getDate();
                        let month = newDate.getMonth() + 1;
                        let year = newDate.getFullYear();
                        let finalDate = `${year}-${month < 10 ? `0${month}` : `${month}`}-${date < 10 ? `0${date}` : `${date}`}`;
                        filterRecord = filterRecord.filter((data) => data.date == finalDate);
                    } else if (filter[key] == 2) {
                        var curr = new Date;
                        var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay())).getTime();
                        var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6)).getTime();

                        filterRecord = filterRecord.filter((data) => new Date(data.date).getTime() > firstday && new Date(data.date).getTime() < lastday)
                    } else if (filter[key] == 3) {
                        let date = new Date();
                        let firstday =
                            new Date(date.getFullYear(), date.getMonth(), 1).getTime();

                        let lastday =
                            new Date(date.getFullYear(), date.getMonth() + 1, 0).getTime();


                        filterRecord = filterRecord.filter((data) => new Date(data.date).getTime() > firstday && new Date(data.date).getTime() < lastday)
                    }
                } else if (key == "payment") {
                    if (filter[key] == 2) {
                        filterRecord = filterRecord.filter((data) => data.credit != 0)
                    } else if (filter[key] == 1) {
                        filterRecord = filterRecord.filter((data) => data.cash != 0)
                    }
                }

            }
            return {
                ...state,
                filterRecord
            }
        default:
            return state;
    }
}

export default dataReducer;

