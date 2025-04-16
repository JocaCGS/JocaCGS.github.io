const cores = ['violet', 'lightsalmon', 'lightblue', 'lightyellow', 'orange', 'lightgreen'];
var index_color = 0;
const formats = ['0%', '50%']
var index_format = 0;


function clickColor(val) {

    const novaCor = cores[val];
    //     box.style.setProperty('background-color', colors[index_color])

    // Atualiza a cor dos quadradões
    document.getElementById("divmainum").style.setProperty('background-color', novaCor)
    document.getElementById("divmaindois").style.setProperty('background-color', novaCor)
    document.getElementById("divmaintres").style.setProperty('background-color', novaCor)


    // Remove a seleção atual
    const todos = document.querySelectorAll(".color-option");
    todos.forEach(opcao => opcao.classList.remove("selected"));

    // Adiciona a borda na opção clicada
    document.getElementById(`quadradinho${val + 1}`).classList.add("selected");
}

function clickFormat(val) {

    if (val == 0) {
        document.getElementById("divmainum").style.setProperty('border-radius', '0%')
        document.getElementById("divmaindois").style.setProperty('border-radius', '0%')
        document.getElementById("divmaintres").style.setProperty('border-radius', '0%')
    } else if (val == 1) {
        document.getElementById("divmainum").style.setProperty('border-radius', '50%')
        document.getElementById("divmaindois").style.setProperty('border-radius', '50%')
        document.getElementById("divmaintres").style.setProperty('border-radius', '50%')
    }
}



function verificarTamanho(event) {
    if (event.key === "Enter") {
        const valor = event.target.value;
        alterarTamanho(valor);
    }
}

function alterarTamanho(valor) {

    if (valor > 400) {
        window.alert("Limite de tamanho excedido. (MAX - 400)")
        return;
    }

    document.getElementById("divmainum").style.setProperty('height', valor + "px")
    document.getElementById("divmainum").style.setProperty('width', valor + "px")


    document.getElementById("divmaindois").style.setProperty('height', valor + "px")
    document.getElementById("divmaindois").style.setProperty('width', valor + "px")

    document.getElementById("divmaintres").style.setProperty('height', valor + "px")
    document.getElementById("divmaintres").style.setProperty('width', valor + "px")

}









// const colors = ['violet', 'lightsalmon', 'lightblue', 'lightyellow']
// var index_color = 0;
// const formats = ['0%', '50%']
// var index_format = 0;

// function clickColor(val) {
//     var box, boxes;
//     if (val != index_color) {
//         //remove class

//         box = document.querySelector('#box'+index_color);
//         box.classList.remove("border");

//         // add class

//         box = document.querySelector('#box'+index_color);
//         box.classList.add("border");


//         // change format color
//         box = document.querySelector('#format0');
//         box.style.setProperty('background-color', colors[index_color])
//         box = document.querySelector('#format1');
//         box.style.setProperty('background-color', colors[index_color])
//     }
// }