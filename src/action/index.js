import api from '../api/api';

export const receiveProducts = products =>{
	return {
		type: 'RECEIVE_PRODUCTS',
		products
	}
}
export const fetchAllProducts = () => dispatch =>{
	api.getProduct(products=>{
		dispatch(receiveProducts(products));
	});
}

export const selectProduct = product => {
	console.log("tset");
	return {
		type: 'GET_PRODUCT_BY_ID',
		payload:product
	}
}

export const addToCartUnSafe = productId => {
	return {
		type: 'ADD_TO_CART',
		productId
	}
}

export const addToCart = productId => (dispatch, getState) => {
	if(getState().products.byId[productId].inventory > 0)
		dispatch(addToCartUnSafe(productId))
}

export const removeFromCart = (product) => { 
	return {
		type: 'REMOVE_FROM_CART',
		productId: product.productId,
		inventory: product.inventory
	}
}

export const closeCart = () => {
	return {
		type: 'CLOSE_DIALOG',
		payload: false
	}
}

export const openCart = () => {
	console.log("testing....")
	return {
		type: 'OPEN_DIALOG',
		payload:true
	}
}