export const initialState = {
    user: null,
    isLoggedIn: false,
    searchedChannels: [],
};

export const actionTypes = {
    SET_USER: "SET_USER",
    LOGOUT: "LOGOUT",
    SEARCH: "SEARCH"
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            }

        case actionTypes.LOGOUT:
            return {
                ...state,
                user: null,
                isLoggedIn: false
            }


        default:
            return state
    }
}

export default reducer;
