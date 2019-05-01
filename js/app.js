const methods = require('./methods');

class Model {
    constructor(data) {
        this.a = data.height,
        this.b = data.width,
        this.c = data.length
    }
    init() {
        paper.install(window);
    	paper.setup('cardboarbox');
    }

    draw() {
        methods.render(methods.getCoords(this))
        console.log('done')
    }
    downloadBottom() {
        methods.downloadAsSVG(`Bottom-${this.a}x${this.b}x${this.c}`);
    }
    downloadTop() {
        methods.downloadAsSVG(`Top-${this.a}x${this.b}x${this.c}`)
    }
}


module.exports = Model;