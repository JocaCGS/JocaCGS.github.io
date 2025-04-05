// Contador de notas perdidas
let notasPerdidas = 0;

// Cria o elemento de contador na tela
const contadorDiv = document.createElement("div");
contadorDiv.id = "contador-perdidas";
const primeiroQuadrado = document.getElementById("quadrado1");
const offsetTop = primeiroQuadrado.offsetTop;
const offsetLeft = primeiroQuadrado.offsetLeft;

contadorDiv.style.position = "absolute";
contadorDiv.style.top = (offsetTop + 30) + "px"; // acima do botão
contadorDiv.style.left = (offsetLeft + 200) + "px"; // alinhado com o primeiro botão

contadorDiv.style.color = "white";
contadorDiv.style.fontSize = "24px";
contadorDiv.style.fontFamily = "Arial";
contadorDiv.innerText = "Notas Perdidas: 0";
document.body.appendChild(contadorDiv);

const quadrado1 = document.getElementById('quadrado1');
document.addEventListener('keydown', function(event) {
    if ((event.key === 'a' || event.key === 'A') && !quadrado1.classList.contains('animate1')) {
        quadrado1.classList.add('animate1');
    }
});
document.addEventListener('keyup', function(event) {
    if (event.key === 'a' || event.key === 'A') {
        quadrado1.classList.remove('animate1');
    }
});

const quadrado2 = document.getElementById('quadrado2');
document.addEventListener('keydown', function(event) {
    if ((event.key === 's' || event.key === 'S') && !quadrado2.classList.contains('animate1')) {
        quadrado2.classList.add('animate1');
    }
});
document.addEventListener('keyup', function(event) {
    if (event.key === 's' || event.key === 'S') {
        quadrado2.classList.remove('animate1');
    }
});

const quadrado3 = document.getElementById('quadrado3');
document.addEventListener('keydown', function(event) {
    if ((event.key === 'k' || event.key === 'K') && !quadrado3.classList.contains('animate1')) {
        quadrado3.classList.add('animate1');
    }
});
document.addEventListener('keyup', function(event) {
    if (event.key === 'k' || event.key === 'K') {
        quadrado3.classList.remove('animate1');
    }
});

const quadrado4 = document.getElementById('quadrado4');
document.addEventListener('keydown', function(event) {
    if ((event.key === 'l' || event.key === 'L') && !quadrado4.classList.contains('animate1')) {
        quadrado4.classList.add('animate1');
    }
});
document.addEventListener('keyup', function(event) {
    if (event.key === 'l' || event.key === 'L') {
        quadrado4.classList.remove('animate1');
    }
});

const gameplate = document.getElementById("gameplate");
const targetY = gameplate.offsetHeight - 80 - 40;

const keyMap = {
    a: 0,
    s: 1,
    k: 2,
    l: 3
};

const quadrados = [quadrado1, quadrado2, quadrado3, quadrado4];

let notas = [];
let velocidadeNota = 18;

function criarNota() {
    const coluna = Math.floor(Math.random() * 4);
    const nota = document.createElement("div");
    nota.classList.add("note");
    nota.dataset.coluna = coluna;
    nota.style.left = quadrados[coluna].offsetLeft + "px";
    nota.style.top = "0px";

    gameplate.appendChild(nota);
    notas.push(nota);
}

function estaSobrepondo(nota, quadrado) {
    const notaBox = nota.getBoundingClientRect();
    const quadradoBox = quadrado.getBoundingClientRect();

    return !(
        notaBox.bottom < quadradoBox.top ||
        notaBox.top > quadradoBox.bottom
    );
}

function atualizarNotas() {
    for (let i = 0; i < notas.length; i++) {
        const nota = notas[i];
        let posY = parseInt(nota.style.top);
        posY += velocidadeNota;
        nota.style.top = posY + "px";

        const coluna = parseInt(nota.dataset.coluna);

        if (estaSobrepondo(nota, quadrados[coluna]) && teclasAtivas[coluna]) {
            nota.remove();
            notas.splice(i, 1);
            i--;
            continue;
        }

        if (posY > gameplate.offsetHeight) {
            // Nota foi perdida
            notasPerdidas++;
            contadorDiv.innerText = "Notas Perdidas: " + notasPerdidas;

            nota.remove();
            notas.splice(i, 1);
            i--;
        }
    }
}

setInterval(criarNota, 150);
setInterval(atualizarNotas, 20);

let teclasAtivas = [false, false, false, false];

document.addEventListener("keydown", function(event) {
    const tecla = event.key.toLowerCase();
    if (tecla in keyMap) {
        const index = keyMap[tecla];
        if (!teclasAtivas[index]) {
            quadrados[index].classList.add("animate1");
            teclasAtivas[index] = true;
        }
    }
});

document.addEventListener("keyup", function(event) {
    const tecla = event.key.toLowerCase();
    if (tecla in keyMap) {
        const index = keyMap[tecla];
        quadrados[index].classList.remove("animate1");
        teclasAtivas[index] = false;
    }
});
