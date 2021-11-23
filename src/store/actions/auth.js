import { LOGIN_SUCCESS, LOGOUT } from "../types";

export const login = (history, username, password) => {
    history.push("/products")
    localStorage.setItem("username", username)
    return {
        type: LOGIN_SUCCESS,
        payload: {username, password}
    }
}

export const logout = (history) => {
    localStorage.removeItem("username")
    history.push("/")
    return {
        type: LOGOUT
    }
}