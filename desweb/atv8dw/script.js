let segundos = 0;
let tempoAtivo = true;
let movimentoAtivo = true;
let foguetesAtivos = true;
let alienAtivo = true;

var alienCount = 0;
var lifeCount = 3;

const timerElement = document.getElementById('timer');
const pausedMessage = document.getElementById('pausedMessage');
const lostMessage = document.getElementById('lostMessage');
const overMessage = document.getElementById('gameOverMessage');

const alien1 = document.getElementById("alien1");
const alien2 = document.getElementById("alien2");
const alien3 = document.getElementById("alien3");

const rocketLeft = document.getElementById("rocketLeft");
const rocketRight = document.getElementById("rocketRight");

let player = document.getElementById("player");
let leftPosition = 50;

function atualizarTimer() {
    if (!tempoAtivo) return;

    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;

    timerElement.textContent =
        `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundosRestantes).padStart(2, '0')}`;
    segundos++;
}

setInterval(atualizarTimer, 1000);

// Função de pausa e retomada
function togglePause() {
    tempoAtivo = !tempoAtivo;
    movimentoAtivo = !movimentoAtivo;
    foguetesAtivos = !foguetesAtivos;
    alienAtivo = !alienAtivo;

    if (tempoAtivo) {
        pausedMessage.style.display = 'none';
    } else {
        pausedMessage.style.display = 'block';
    }
}

function resumeGame() {
    if (!tempoAtivo) {
        togglePause();
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === 'b' || event.key === 'B') {
        togglePause();
    } else if (event.key === 'r' || event.key === 'R') {
        resumeGame();
    }
});

// Movimento da nave
function movePlayer() {
    document.addEventListener('keypress', function (event) {
        if (!movimentoAtivo) return;  // Se o movimento estiver pausado, não move

        if (event.key === 'a' || event.key === 'A') {
            if (leftPosition <= 12) return;
            leftPosition -= 1;
            player.style.left = leftPosition + "%";
        } else if (event.key === 'd' || event.key === 'D') {
            if (leftPosition >= 88) return;
            leftPosition += 1;
            player.style.left = leftPosition + "%";
        }
    });
}

function shootRockets() {
    let toggleSide = true; // alterna entre esquerdo e direito
    let isShooting = false;

    let rocketLeftDone = false;
    let rocketRightDone = false;

    function checkReset() {
        if (rocketLeftDone && rocketRightDone) {
            rocketLeft.style.bottom = "0px";
            rocketRight.style.bottom = "0px";
            rocketLeftDone = false;
            rocketRightDone = false;
        }
    }

    document.addEventListener("keydown", function (event) {
        if (event.code === "Space" && foguetesAtivos && !isShooting) {
            isShooting = true;

            if (toggleSide) {
                launchRocket(rocketLeft, () => {
                    rocketLeftDone = true;
                    checkReset();
                    isShooting = false;
                });
            } else {
                launchRocket(rocketRight, () => {
                    rocketRightDone = true;
                    checkReset();
                    isShooting = false;
                });
            }

            toggleSide = !toggleSide;
        }
    });
}

function launchRocket(rocketElement, callback) {
    let bottom = 0;
    const maxHeight = window.innerHeight; // altura máxima da tela em pixels

    const interval = setInterval(() => {
        if (bottom >= maxHeight) {
            clearInterval(interval);
            if (callback) callback();
        } else {
            bottom += 10; // velocidade
            rocketElement.style.bottom = bottom + "px";
        }
    }, 10);
}

window.onload = () => {
    movePlayer();
    shootRockets();
    defCounters();
};

var isLost = false;

// Movimento dos aliens
function alienMovement(alienElement) {
    let top = -150;
    let topgear = 0;
    const maxHeight = window.innerHeight; // altura máxima da tela em pixels
    
    const interval = setInterval(() => {
        if (topgear >= maxHeight - 100) {
            clearInterval(interval);
            isLost = true;
            lostRound();
        } else {
            top += 0.5; // velocidade
            topgear += 0.5;
            alienElement.style.top = top + "px";
        }
    }, 10);
}

function resetAlienPosition(alienElement) {
    alienElement.style.top = "-150px"; // Reseta a posição
    alienElement.style.display = "block"; // Garante que fique visível após reset
}

function lostRound() {
    tempoAtivo = !tempoAtivo;
    movimentoAtivo = !movimentoAtivo;
    foguetesAtivos = !foguetesAtivos;
    alienAtivo = !alienAtivo;

    if (tempoAtivo) {
        lostMessage.style.display = 'none';
    } else {
        lostMessage.style.display = 'block';
    }
}

function tryAgain() {
    if (!tempoAtivo) {
        togglePause();
    }

    // Reposiciona os aliens antes de começar a movimentação novamente
    resetAlienPosition(alien1);
    resetAlienPosition(alien2);
    resetAlienPosition(alien3);

    // Re-inicia o movimento dos aliens
    alienMovement(alien1);
    alienMovement(alien2);
    alienMovement(alien3);
    
    lostMessage.style.display = 'none';
}

document.addEventListener("keydown", function(event) {
    if (isLost === false){
        return;
    }
    if (event.key === 'l' || event.key === 'L') {
        if(lifeCount === 1) {
            let textlifeCount = document.getElementById("lifeCount"); // Corrigido o método
            textlifeCount.textContent = "LIFE: 0"; // Atualiza o texto
            let textoLstRound = document.getElementById("lostMessage");
            textoLstRound.textContent = "GAME OVER";
            return;
        }

        tryAgain();
        lifeCount--;
        defCounters();
        isLost = false
    }
});

function defCounters() {
    let textlifeCount = document.getElementById("lifeCount"); // Corrigido o método
    textlifeCount.textContent = "LIFE: " + lifeCount; // Atualiza o texto
}

alienMovement(alien1);
alienMovement(alien2);
alienMovement(alien3);

function colideComAlien() {
    const elementos = [alien1, alien2, alien3];
    const foguetes = [rocketLeft, rocketRight];

    foguetes.forEach(rocket => {
        const rocketRect = rocket.getBoundingClientRect();

        elementos.forEach(alien => {
            const alienRect = alien.getBoundingClientRect();

            if (
                rocketRect.left < alienRect.right &&
                rocketRect.right > alienRect.left &&
                rocketRect.top < alienRect.bottom &&
                rocketRect.bottom > alienRect.top
            ) {
                alien.style.visibility = 'hidden';
            }
        });
    });
}


setInterval(colideComAlien, 50);
