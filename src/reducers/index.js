import { combineReducers } from "redux";

import { categories } from './categories';
import { products } from './product'
import { cart } from './cart'
import { auth } from './auth'

export default combineReducers({
    categories,
    products,
    cart,
    auth


})