import print from './msg';
import $ from 'jquery';

console.log(_.difference([1, 2, 3], [4, 5]));
console.log(_.lastIndexOf([1, 2, 3], 2));

if(module.hot) {
    module.hot.accept('./msg.js', function() {
        console.log('O módulo de msg atualizou!');
        print();
    })
}

const body = $('body');