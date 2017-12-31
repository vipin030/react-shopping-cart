const initialState = {
	addedIds: [],
	productQuantities: {},
	dialogBoxStatus: true
}

const addedIds = (state = initialState.addedIds, action) =>{
	switch(action.type){
		case 'ADD_TO_CART':
			if(state.indexOf(action.productId) !== -1)
				return state;
			return [...state, action.productId];
		default:
			return state;
	}
}

const productQuantities = (state = initialState.productQuantities, action) =>{
	switch(action.type){
		case 'ADD_TO_CART':
			const { productId } = action;
			return {...state,[productId]:(state[productId] || 0)+1}
		default:
			return state;
	}
}
const dialogBoxStatus = (state = initialState.dialogBoxStatus, action) =>{
	console.log("current action",action)
	switch(action.type){
		case 'CLOSE_DIALOG':
			return action.payload;
		case 'OPEN_DIALOG':console.log("dddd open");
			return action.payload;
		default:
			return state;
	}
}

const cart = (state=initialState,action) =>{ console.log("test..")
	switch(action.type){
		case 'CHECKOUT_REQUEST':
			return initialState;
		default:
			return {
				addedIds: addedIds(state.addedIds, action),
				productQuantities: productQuantities(state.productQuantities, action),
				dialogBoxStatus: dialogBoxStatus(state.dialogBoxStatus, action)
			}
	}
}

export default cart