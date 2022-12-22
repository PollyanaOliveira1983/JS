//import * as nb from './numbers.js';

import {sum, round} from './numbers.js';
import Product from './product.js';

//const x = nb.sum(3, 4);

const x = sum(3, 4);

console.log(x);

console.log(round(3.2345, 2));

const obj = new Product("Computador", 800.0, 10);

console.log(obj);

