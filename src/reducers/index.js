import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import product, * as fromProducts from './product';
import cart from './cart';

export default combineReducers({
  products:product,
  cart,
  routing: routerReducer,
})

export const getCartDetails = (state) =>{
	return state.cart.addedIds.map(id=>({
		...fromProducts.getProduct(state.products,id),inventory:state.cart.productQuantities[id]
	}));
}

export const getCartPrice = (state) => {
	return getCartDetails(state).reduce((total, item)=>{
		total += (parseFloat(item.price)*parseFloat(item.inventory));
		return total;
	},0).toFixed(2);
}
