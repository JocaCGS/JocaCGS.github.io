const colors = ['violet', 'lightsalmon', 'lightblue', 'lightyellow']
var index_color = 0;
const formats = ['0%', '50%']
var index_format = 0;

function clickColor(val) {
    var box, boxes;
    if (val != index_color) {
        //remove class

        box = document.querySelector('#box'+index_color);
        box.classList.remove("border");

        // add lcass

        box = document.querySelector('#box'+index_color);
        box.classList.add("border");


        // change format color
        box = document.querySelector('#format0');
        box.style.setProperty('background-color', colors[index_color])
        box = document.querySelector('#format1');
        box.style.setProperty('background-color', colors[index_color])




    }
}