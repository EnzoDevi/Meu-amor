let indiceImagem = 0;
const imagens = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png", "img7.png", "img8.png", "img9.png", "img10.png", "img11.png", "img12.png", "img13.png", "img14.png", "img15.png", "img16.png"]

function direita() {
    const imagem = document.getElementById('imagem')
    indiceImagem++;
    if (indiceImagem >= imagens.length ) {
        indiceImagem = 0;
    }
    imagem.src = imagens[indiceImagem];
}

let indiceImagen = 0;
const imagenn = [, "img16.png", "img15.png", "img14.png", "img13.png", "img12.png", "img11.png", "img10.png", "img9.png", "img8.png", "img7.png", "img6.png", "img5.png", "img4.png", "img3.png", "img2.png", "img1.png"]

function esquerda() {
    const imagen = document.getElementById('imagem')
    indiceImagen++;
    if (indiceImagen >= imagenn.length ) {
        indiceImagen = 0;
    }
    imagen.src = imagenn[indiceImagen];
}