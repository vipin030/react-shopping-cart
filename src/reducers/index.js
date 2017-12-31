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
	console.log("Total fun")
	return getCartDetails(state).reduce((total, item)=>{
		total += (parseFloat(item.price)*parseFloat(item.inventory));
		console.log("Total",total)
		return total;
	},0).toFixed(2);
}
