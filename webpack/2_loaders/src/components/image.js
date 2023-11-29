import Paisagem from '../img/paisagem.jpg';

class Image {
    insertImage() {
        const img = document.createElement('img');

        img.src = Paisagem;
        img.width = 200;

        document.querySelector('body').appendChild(img);
    }
}

export default Image;