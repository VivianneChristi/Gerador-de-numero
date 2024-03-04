function gerarNumero() {
    const numerosDivs = document.querySelectorAll('.random .box');
    const numerosGerados = new Set();

    // Limpa os números anteriores e reinicia a animação
    numerosDivs.forEach(div => {
        div.textContent = '';
        div.style.animation = 'none';
        div.offsetHeight; /* Trigger reflow para reiniciar a animação */
        div.style.animation = null;
    });

    // Gera 15 números aleatórios únicos
    while (numerosGerados.size < 15) {
        const numero = Math.floor(Math.random() * 25) + 1;
        numerosGerados.add(numero);
    }

    // Adiciona os números gerados às caixas
    let i = 0;
    numerosGerados.forEach(numero => {
        numerosDivs[i].textContent = numero;
        i++;
    });
}

// Adiciona um evento de clique ao botão "GERAR"
document.querySelector('#gerarButton').addEventListener('click', gerarNumero);