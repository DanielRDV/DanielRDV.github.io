// ativar links menus
const links = document.querySelectorAll(".header-menu a");

function ativarlink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarlink);

// ativar seguros url

const parametro = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametro.forEach(ativarProduto);

//perguntas.

const perguntas = document.querySelectorAll(".perguntas button");

function abrirPergunta(event) {
	const pergunta = event.currentTarget;
	const controls = pergunta.getAttribute("aria-controls");
	const resposta = document.getElementById(controls);

	resposta.classList.toggle("abrir");
	const ativa = resposta.classList.contains("abrir");
	pergunta.setAttribute("aria-expanded", ativa);
	
}

function eventoPergunta(pergunta) {
	pergunta.addEventListener("click", abrirPergunta);

}

perguntas.forEach(eventoPergunta);

//galeria


const galeria = document.querySelectorAll(".bicicleta-imgs img");
const galeriaContainer = document.querySelector(".bicicleta-imgs");


function trocaImg(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 800px)").matches;
  if(media) {
    galeriaContainer.prepend(img);
  }
}

function clickGaleria(troca) {
  troca.addEventListener("click", trocaImg);

}

galeria.forEach(clickGaleria);


//plugin.animação.
  if(window.SimpleAnime) {
   new SimpleAnime();
  }

