
import _product from './products.json';
const TIMEOUT = 100;

export default {
	getProduct: (callback, timeout) => setTimeout(()=>callback(_product),timeout || TIMEOUT)
}