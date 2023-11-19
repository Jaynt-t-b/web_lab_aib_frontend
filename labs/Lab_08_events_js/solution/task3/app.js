document.getElementById('red').addEventListener('input', changeColor);
document.getElementById('green').addEventListener('input', changeColor);
document.getElementById('blue').addEventListener('input', changeColor);
document.getElementById('generate').addEventListener('click', generateColor);

function changeColor() {
    var red = document.getElementById('red').value;
    var green = document.getElementById('green').value;
    var blue = document.getElementById('blue').value;

    document.getElementById('colorArea').style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function generateColor() {
    var colorList = document.getElementById('colorList');
    if (colorList.children.length >= 15) {
        colorList.removeChild(colorList.firstChild);
    }

    var colorBlock = document.createElement('div');
    colorBlock.style.width = '60px';
    colorBlock.style.height = '60px';
    colorBlock.style.backgroundColor = document.getElementById('colorArea').style.backgroundColor;
    colorList.appendChild(colorBlock);
}
