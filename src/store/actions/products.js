import { FETCH_PRODUCTS_FAILED, FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS } from "../types"

export const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProductsFailed = (errorMessage) => {
    return {
        type: FETCH_PRODUCTS_FAILED,
        payload: errorMessage
    }
}

export const fetchProductsStart = () => {
    return {
        type: FETCH_PRODUCTS_START
    }
}