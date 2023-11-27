let livros = [];

function adicionarLivro() {
  const titulo = prompt("Digite o título do livro:");
  const autor = prompt("Digite o nome do autor:");
  const imagem = prompt("Insira a URL da imagem do livro:");

  livros.push({ titulo, autor, imagem });

  atualizarInformacoes();
}

function apagarLivros() {
  livros = [];
  atualizarInformacoes();
}

function mostrarLivros() {
  const livrosContainer = document.getElementById("livros-container");
  livrosContainer.innerHTML = "";

  livros.forEach(livro => {
    const livroDiv = document.createElement("div");
    livroDiv.className = "livro";
    
    const titulo = document.createElement("p");
    titulo.textContent = `Título: ${livro.titulo}`;

    const autor = document.createElement("p");
    autor.textContent = `Autor: ${livro.autor}`;

    const imagem = document.createElement("img");
    imagem.src = livro.imagem;
    imagem.alt = livro.titulo;
    imagem.style.maxWidth = "100%";

    livroDiv.appendChild(titulo);
    livroDiv.appendChild(autor);
    livroDiv.appendChild(imagem);

    livrosContainer.appendChild(livroDiv);
  });

  atualizarInformacoes();
}

function atualizarInformacoes() {
  const livrosInfo = document.getElementById("livros-info");
  livrosInfo.textContent = `Livros cadastrados: ${livros.length}`;
}