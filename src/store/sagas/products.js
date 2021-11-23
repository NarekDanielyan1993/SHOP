import { call, put, takeEvery } from 'redux-saga/effects'
import { axiosInstance } from "../../axiosConfig"
import { fetchProductsFailed, fetchProductsSuccess } from '../actions/products'
import { FETCH_PRODUCTS_START } from '../types'

const fetchProductsApi = () => {
    return axiosInstance.get("/products")
        .then(response => {
            return response.data})
        .catch(e => {throw e})
}

function* fetchProducts() {
    try {
        const products = yield call(fetchProductsApi)
        yield put(fetchProductsSuccess(products))
    } catch (error) {
        yield put(fetchProductsFailed(error))
    }
}

function* watchProducts() {
    yield takeEvery(FETCH_PRODUCTS_START, fetchProducts);
}

export default watchProducts;
