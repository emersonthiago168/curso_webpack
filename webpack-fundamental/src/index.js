import soma from './calc.js';
import Heading from './components/heading.js';

console.log('Testando o webpack 2');

soma(2, 4);
soma(10, 20);

// Loaders
const heading = new Heading();

heading.create('Este título é dinâmico');