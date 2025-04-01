// Seleciona o quadrado
const quadrado = document.getElementById('quadrado');

// Função para adicionar a animação
function alternarCor() {
    quadrado.classList.add('animate'); // Adiciona a classe de animação

    // Remove a animação após o tempo da animação para que possa ser reaplicada
    setTimeout(function() {
        quadrado.classList.remove('animate');
    }, 2000); // Tempo correspondente à duração da animação (2s)
}

// Detecta o pressionamento da tecla 'W'
document.addEventListener('keydown', function(event) {
    if (event.key === 'w' || event.key === 'W') {
        alternarCor();
    }
});

