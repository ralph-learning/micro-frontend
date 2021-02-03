import { mount as productMount } from 'products/ProductsIndex';
import { mount as cartShowMount} from 'cart/CartShow';

console.log('it is working')

productMount(document.querySelector('#my-products'));
cartShowMount(document.querySelector('#my-cart'));

