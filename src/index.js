fetch('/src/opcao1.json')
      .then(response => response.json())
      .then(dados => {
        const container = document.getElementById("opcao1-page");

        dados.proibido.forEach(item => {
          const bloco = document.createElement("div");
          bloco.innerHTML = `<h2 class="opcao-h2-page opcao-texto">${item.titulo}</h2><p  class="opcao-p-page opcao-texto">${item.texto}</p>`;
          container.appendChild(bloco);
        });
      })
      .catch(error => console.error('Erro ao carregar JSON:', error));


fetch('/src/anuncios.json').then(response => response.json()).then(dados => {
    const container = document.getElementById("anuncio-texto");
    const bloco = document.createElement("p");
    bloco.innerHTML = `<p>${dados.texto}</p>`;
    container.appendChild(bloco);
});

const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao3 = document.getElementById("botao3");
const botao4 = document.getElementById("botao4");

// BOTAO 1
botao1.addEventListener("click", () => {
    window.location.href = "src/pages/opcao1.html";
  });

  botao1.addEventListener("mouseover", () => {
    console.log("Mouse em cima do botão!");
    botao1.style.opacity = 0.1; // muda algo visual
  }
);
botao1.addEventListener("mouseout", () => {
    console.log("Mouse em cima do botão!");
    botao1.style.opacity = 1; // muda algo visual
  }
);
// BOTAO 2
botao2.addEventListener("click", () => {
  window.location.href = "src/pages/opcao2.html";
  });

  botao2.addEventListener("mouseover", () => {
    console.log("Mouse em cima do botão!");
    botao2.style.opacity = 0.1; // muda algo visual
  }
);
botao2.addEventListener("mouseout", () => {
    console.log("Mouse em cima do botão!");
    botao2.style.opacity = 1; // muda algo visual
  }
);
// BOTAO 3
botao3.addEventListener("click", () => {
    alert("BOTAO 3");
  });

  botao3.addEventListener("mouseover", () => {
    console.log("Mouse em cima do botão!");
    botao3.style.opacity = 0.1; // muda algo visual
  }
);
botao3.addEventListener("mouseout", () => {
    console.log("Mouse em cima do botão!");
    botao3.style.opacity = 1; // muda algo visual
  }
);
// BOTAO 4
botao4.addEventListener("click", () => {
    alert("BOTAO 4");
  });

  botao4.addEventListener("mouseover", () => {
    console.log("Mouse em cima do botão!");
    botao4.style.opacity = 0.1; // muda algo visual
  }
);
botao4.addEventListener("mouseout", () => {
    console.log("Mouse em cima do botão!");
    botao4.style.opacity = 1; // muda algo visual
  }
);

function botaoVoltar() {
  window.location.href = "/index.html";
}