import * as ACTION_TYPES from '../types';

export const initialState = {
  products: []
}

const ProductsReducer = (state = initialState, action) => {
    switch(action.type) {
      case ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
        return {
            ...state,
            products: action.payload
        }
      case ACTION_TYPES.FETCH_PRODUCTS_FAILED:
        return {
            
        }
      default:
        return state
    }
}

export default ProductsReducer;