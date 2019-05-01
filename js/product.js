const Product = require('./app');

const elements = {
    height: document.getElementById('height'),
    height_top: document.getElementById('height-top'),
    width: document.getElementById('width'),
    length: document.getElementById('length'),
    bottomBtn: document.getElementById('btn'),
    topBtn: document.getElementById('btn2'),
}

const check = () => {
if(elements.height.value != '' && elements.width.value != '' && elements.length.value != '') {
        document.getElementById('btn').disabled = false
    }
}

const check2 = () => {
    if(elements.height_top.value != '' && elements.width.value != '' && elements.length.value != ''){
        document.getElementById('btn2').disabled = false
    }
}

document.addEventListener('keypress', () => {
    check();
    check2();
})

elements.bottomBtn.addEventListener('click',() => {
    const height = parseInt(elements.height.value, 10)
    const width = parseInt(elements.width.value, 10) 
    const length = parseInt(elements.length.value, 10)

    const box = new Product({height, width, length});

    box.render();
    box.download(`Bottom-${height}x${width}x${length}.svg`);
})

elements.topBtn.addEventListener('click', () => {
    const height = parseInt(elements.height_top.value, 10)
    const width = parseInt(elements.width.value, 10) + 6
    const length = parseInt(elements.length.value, 10) + 6

    const box = new Product({height, width, length});

    box.render();
    box.download(`Top-${height}x${width}x${length}.svg`);

})