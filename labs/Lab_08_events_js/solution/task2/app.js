document.getElementById('red').addEventListener('input', changeColor);
document.getElementById('green').addEventListener('input', changeColor);
document.getElementById('blue').addEventListener('input', changeColor);

function changeColor() {
    var red = document.getElementById('red').value;
    var green = document.getElementById('green').value;
    var blue = document.getElementById('blue').value;

    document.getElementById('colorArea').style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}
