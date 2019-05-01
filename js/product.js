const Product = require('./app');

const elements = {
    height: document.getElementById('height'),
    height_top: document.getElementById('height-top'),
    width: document.getElementById('width'),
    length: document.getElementById('length'),
    bottomBtn: document.getElementById('btn'),
    topBtn: document.getElementById('btn2'),
}


elements.length.addEventListener('input', () => {
    document.getElementById('btn').disabled = false
    document.getElementById('btn2').disabled = false
})


elements.bottomBtn.addEventListener('click',() => {
    const height = parseInt(elements.height.value, 10)
    const width = parseInt(elements.width.value, 10) 
    const length = parseInt(elements.length.value, 10)

    const box = new Product({height, width, length});

    box.draw();
    box.download(`Bottom-${height}x${width}x${length}.svg`);
})

elements.topBtn.addEventListener('click', () => {
    const height = parseInt(elements.height_top.value, 10)
    const width = parseInt(elements.width.value, 10) + 6
    const length = parseInt(elements.length.value, 10) + 6

    const box = new Product({height, width, length});

    box.draw();
    box.download(`Top-${height}x${width}x${length}.svg`);

})