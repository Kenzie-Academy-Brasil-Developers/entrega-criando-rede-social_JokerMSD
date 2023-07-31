// Obtemos as referências dos elementos
const imagem = document.getElementById('imagem');
const imagem2 = document.getElementById('imagem2');
const imagem3 = document.getElementById('imagem3');
const trocarBtn = document.getElementById('trocarBtn');
const trocarBtn2 = document.getElementById('trocarBtn2');
const trocarBtn3 = document.getElementById('trocarBtn3');

// Definimos um array com os URLs das imagens que queremos trocar
const imagens = [
  './src/assets/img/gray-heart.svg',
  './src/assets/img/red-heart.svg'

];

// Variável para armazenar o índice atual da imagem
let indiceAtual = 0;

// Adicionamos um evento de clique ao botão
trocarBtn.addEventListener('click', function () {
  // Incrementamos o índice para mostrar a próxima imagem
  indiceAtual = (indiceAtual + 1) % imagens.length;

  // Alteramos o atributo "src" da imagem para exibir a nova imagem
  imagem.src = imagens[indiceAtual];
});

trocarBtn2.addEventListener('click', function () {
  // Incrementamos o índice para mostrar a próxima imagem
  indiceAtual = (indiceAtual + 1) % imagens.length;

  // Alteramos o atributo "src" da imagem para exibir a nova imagem
  imagem2.src = imagens[indiceAtual];
});

trocarBtn3.addEventListener('click', function () {
  // Incrementamos o índice para mostrar a próxima imagem
  indiceAtual = (indiceAtual + 1) % imagens.length;

  // Alteramos o atributo "src" da imagem para exibir a nova imagem
  imagem3.src = imagens[indiceAtual];
});