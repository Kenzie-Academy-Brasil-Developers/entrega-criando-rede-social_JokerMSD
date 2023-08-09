//Fazer evento para alterar imagem do coração quando curtida
// Obtenho as referências dos elementos
const imagem = document.getElementById("imagem");
const imagem2 = document.getElementById("imagem2");
const imagem3 = document.getElementById("imagem3");
const trocarBtn = document.getElementById("trocarBtn");
const trocarBtn2 = document.getElementById("trocarBtn2");
const trocarBtn3 = document.getElementById("trocarBtn3");

// Defino um array com o Caminho das imagens que queremos trocar
const imagens = [
  "./src/assets/img/gray-heart.svg",
  "./src/assets/img/red-heart.svg",
];

function toggleHeartImage(imagem, button) {
  const isLiked = button.getAttribute("data-liked") === "true";
  const newIndex = isLiked ? 0 : 1;
  
  imagem.src = imagens[newIndex];
  button.setAttribute("data-liked", !isLiked);
}

// Adiciono um evento de clique ao botão
trocarBtn.addEventListener("click", function () {
  toggleHeartImage(imagem, trocarBtn);
});

trocarBtn2.addEventListener("click", function () {
  toggleHeartImage(imagem2, trocarBtn2);
});

trocarBtn3.addEventListener("click", function () {
  toggleHeartImage(imagem3, trocarBtn3);
});

//Fazer evento para aumentar o numero de curtidas

// Obtenho as referências dos elementos novamente
const small1 = document.getElementById("small1");
const small2 = document.getElementById("small2");
const small3 = document.getElementById("small3");
const likeButton = document.getElementById("trocarBtn");
const likeButton2 = document.getElementById("trocarBtn2");
const likeButton3 = document.getElementById("trocarBtn3");

// Variáveis para armazenar os valores das curtidas
let small1Value = parseInt(small1.innerText);
let small2Value = parseInt(small2.innerText);
let small3Value = parseInt(small3.innerText);

// Variáveis para identificar o status da curtida
let isLiked1 = false;
let isLiked2 = false;
let isLiked3 = false;

likeButton.addEventListener("click", function (e) {
  if (isLiked1) {
    small1.innerText = parseInt(small1.innerText) - 1;
  } else {
    small1.innerText = parseInt(small1.innerText) + 1;
  }
  isLiked1 = !isLiked1;
});

likeButton2.addEventListener("click", function (e) {
  if (isLiked2) {
    small2.innerText = parseInt(small2.innerText) - 1;
  } else {
    small2.innerText = parseInt(small2.innerText) + 1;
  }
  isLiked2 = !isLiked2;
});

likeButton3.addEventListener("click", function (e) {
  if (isLiked3) {
    small3.innerText = parseInt(small3.innerText) - 1;
  } else {
    small3.innerText = parseInt(small3.innerText) + 1;
  }
  isLiked3 = !isLiked3;
});

// arrays MODAL

const users = [
  {
    id: 1,
    user: "Samuel Leão",
    stack: "Front end Engineer",
    img: "./src/assets/img/user1.svg",
  },
  {
    id: 2,
    user: "Iris Silva",
    stack: "Front end Engineer",
    img: "./src/assets/img/user5.svg",
  },
  {
    id: 3,
    user: "Carla Maria",
    stack: "Back end Engineer",
    img: "./src/assets/img/user6.svg",
  },
  {
    id: 4,
    user: "Carla Maria",
    stack: "Back end Engineer",
    img: "./src/assets/img/user4.svg",
  },
  {
    id: 5,
    user: "João Carvalho",
    stack: "Devop's",
    img: "./src/assets/img/user7.svg",
  },
];

const posts = [
  {
    id: 1,
    title:
    "Empresa de Tecnologia da Informação abre vagas para programa de estágio",
    text: "A Framework Digital, empresa mineira especializada em Tecnologia da Informação, irá iniciar o seu sexto programa de estágio, com o prazo de inscrições entre os dias 08 e 28 de agosto. O programa é conhecido como Framework Padawans, com inspiração nos filmes Star Wars. Nas histórias, os iniciantes fazem treinamentos para se tornar cavaleiros Jedi, que compõem o lado bom da força.",
    user: "Iris Silva",
    stack: "Front end Engineer",
    img: "./src/assets/img/user5.svg",
    likes: 25,
  },
  {
    id: 2,
    title:
      "Programa de estágio abre vagas em Segurança da Informação com regime remoto",
      text: "Em Segurança da Informação, as vagas são destinadas às áreas de Security Operations Center (SOC), Administração de Dispositivos de Segurança (ADS), Resposta a Incidentes (RI), Segurança e Privacidade e Consultoria Técnica. O candidato interessado deverá estar matriculado em um curso superior em Ciência da Computação, Segurança da Informação, Tecnologia da Informação e afins, com previsão de conclusão do curso de fevereiro de 2023 a fevereiro de 2025.",
      user: "Carla Maria",
      stack: "Back end Engineer",
      img: "./src/assets/img/user6.svg",
      likes: 19,
    },
    {
      id: 3,
    title: "O que é programação orientada a objetos e programação funcional",
    text: "A Programação Funcional é uma orientação focada na programação declarativa. Conhecendo mais a programação funcional a partir de códigos podemos nos deparar de primeira com o conceito mais central da programação funcional, que é o conceito de funções puras, isso significa que o retorno de uma função deve depender apenas dos seus parâmetros de entrada. Com classes podemos editar os valores das propriedades dos objetos criados ou ainda criar métodos para essas propriedades, ainda por cima podemos definir se vão ser públicos (vão para o objeto) ou estáticos (não são instanciados, ou seja, não vão para o objeto), e isso tem seu lado bom e ruim.",
    user: "João Carvalho",
    stack: "Devop's",
    img: "./src/assets/img/user7.svg",
    likes: 8,
  },
];

// Seleciono os botões de detalhes e o modal
const detailsButtons = document.querySelectorAll(".buttonpost");
const modal = document.getElementById("post-modal");
const modalContent = document.getElementById("modal-content");
const closeModalButton = document.getElementById("close-modal");

// Função para abrir o modal e exibir o conteúdo do post
function openModal(postId) {
  const post = posts.find((post) => post.id === postId);
  if (post) {
  const author = users.find((user) => user.user === post.user);
  modalContent.innerHTML = `
  <div class="divpost">
  <img class="imgpost" src="${author.img}" alt="${author.user}" />
          <div class="divpostcontent">
              <h2 class="h2postcontent">${author.user}</h2>
              <p class="ppostcontent">${author.stack}</p>
              </div>
              </div>
              <h2 class="h2postDialog">${post.title}</h2>
              <p class="ptextDialog">${post.text}</p>
  `;
  modal.showModal();

  const followButtonModal = document.querySelector("#followDialog");
  if (followButtonModal) {
    const userId = users.find((user) => user.user === post.user).id;
    followButtonModal.textContent = followedUserIds.includes(userId) ? "Seguindo" : "Seguir";
    followButtonModal.classList.toggle("following", followedUserIds.includes(userId));

    followButtonModal.addEventListener("click", () => {
      toggleFollow(followButtonModal, userId);
    });
  }
};
};

// Adicionar evento de clique para cada botão de detalhes
detailsButtons.forEach((button) => {
  const postId = parseInt(button.getAttribute('data-post-id'));
  button.addEventListener("click", () => {
    openModal(postId);
  });
});

// Fechar o modal ao clicar no botão de fechar
closeModalButton.addEventListener("click", () => {
  modal.close();
});

const postLikedStatus = [];

for (let i = 0; i < posts.length; i++) {
  postLikedStatus[i] = false;
}



//Fazer evento para seguir
const followedUserIds = [];

const followButtonsModal = document.querySelectorAll(".follow_follow-modal");
const followButtons = document.querySelectorAll(".follow");
// Função para alternar entre seguir e seguindo
function toggleFollow(button, userId) {
  const isFollowing = followedUserIds.includes(userId);

  if (isFollowing) {
    // Unfollow user
    followedUserIds.splice(followedUserIds.indexOf(userId), 1);
  } else {
    // Follow user
    followedUserIds.push(userId);
  }

  button.textContent = isFollowing ? "Seguir" : "Seguindo";
  button.classList.toggle("following", !isFollowing);
}

// Adicionar evento de clique para cada botão de seguir
followButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const userId = parseInt(button.getAttribute('data-user-id'));
    toggleFollow(button, userId);
  });
});

followButtonsModal.forEach((button) => {
  button.addEventListener("click", () => {
    const userId = parseInt(button.getAttribute('data-user-id'));
    toggleFollow(button, userId);
  });
});


//Criar Novo Post

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const title = form.querySelector('input[type="text"]').value;
  const text = form.querySelector('textarea').value;

  // Crie um novo post
  const newPost = {
    id: posts.length + 1,
    title: title,
    text: text,
    user: "Samuel Leão", 
    stack: "Front end Engineer",
    img: "./src/assets/img/user1.svg",
    likes: 0, // Inicializa com 0 likes
  };

  // Adicione o novo post ao array de posts
  posts.push(newPost);

  // Limpe os campos de input e textarea
  form.querySelector('input[type="text"]').value = '';
  form.querySelector('textarea').value = '';

  updatePostsDisplay();
});

function updatePostsDisplay() {
  const postsSection = document.querySelector('.posts');

  // Limpa a seção de posts
  postsSection.innerHTML = '';

  // Adiciona os novos posts
  posts.forEach(post => {
    const postHTML = `
      <article>
        <div class="divpost">
          <img class="imgpost" src="${post.img}" alt="${post.user}" />
          <div class="divpostcontent">
            <h2 class="h2postcontent">${post.user}</h2>
            <p class="ppostcontent">${post.stack}</p>
          </div>
        </div>
        <h2 class="h2post">${post.title}</h2>
        <p class="ptext">${post.text}</p>
        <div class="buttonsdiv">
          <button class="buttonpost" data-post-id="${post.id}">Abrir Post</button>
          <div>
            <button class="like-button" data-post-id="${post.id}" data-liked="false">
              <img class="likebutton" src="./src/assets/img/gray-heart.svg" alt="Empty Heart(Post not liked)" />
            </button>
            <small class="likes-count">${post.likes}</small>
          </div>
        </div>
      </article>
    `;

    postsSection.insertAdjacentHTML('beforeend', postHTML);
  });

  // Adiciono os eventos de clique para abrir detalhes do post e para curtir
  const detailsButtons = document.querySelectorAll('.buttonpost');
  detailsButtons.forEach(button => {
    const postId = parseInt(button.getAttribute('data-post-id'));
    button.addEventListener('click', () => {
      openModal(postId);
    });
  });

  const likeButtons = document.querySelectorAll('.like-button');
  likeButtons.forEach(button => {
    const postId = parseInt(button.getAttribute('data-post-id'));
    button.addEventListener('click', () => {
      toggleLike(postId, button);
    });
        // Atualiza a aparência do botão de curtida com base no status de curtida
        const postIndex = postId - 1;
        const isLiked = postLikedStatus[postIndex];
        button.setAttribute('data-liked', isLiked);
        button.querySelector('img').src = isLiked ? './src/assets/img/red-heart.svg' : './src/assets/img/gray-heart.svg';
      });
}
  

// Função para alternar curtida
function toggleLike(postId, button) {
  const postIndex = postId - 1; // Subtrai 1 para corresponder ao índice do array
  const isLiked = postLikedStatus[postIndex];
  const post = posts[postIndex];

  if (isLiked) {
    post.likes--;
  } else {
    post.likes++;
  }

  postLikedStatus[postIndex] = !isLiked;

  button.setAttribute('data-liked', !isLiked);
  button.querySelector('img').src = isLiked ? './src/assets/img/gray-heart.svg' : './src/assets/img/red-heart.svg';
  button.nextElementSibling.textContent = post.likes;
};

updatePostsDisplay();

