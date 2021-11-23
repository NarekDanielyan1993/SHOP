import * as ACTION_TYPES from '../types';

export const initialState = {
    isLoggedIn: false,
    username: "",
    password: ""
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.LOGIN_SUCCESS:
            return {
              ...state,
              isLoggedIn: true,
              username: action.payload.username,
              password: action.payload.password
            }
        case ACTION_TYPES.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                username: "",
                password: ""
            }
        default:
            return state
    }
}

export default AuthReducer;