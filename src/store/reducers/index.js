import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import ProductsReducer from './productsReducer';

const rootReducer = combineReducers({
    auth: AuthReducer,
    products: ProductsReducer
});

export default rootReducer;