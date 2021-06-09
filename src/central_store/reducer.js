export const initialState = {
    books:[]
}


const reducer = (state, action) => {
    switch (action.type) {
        case "addBooks":
                return{
                    ...state,
                    books:[...state.books,action.data],
                };           
    
        default: 
          return state;    
    }
}

export default reducer;