const methods = require('./methods');

class Product {
    constructor(data) {
        this.a = data.height,
        this.b = data.width,
        this.c = data.length
    }
    draw() {
        paper.install(window);
    	paper.setup('cardboarbox');
        methods.render(methods.getCoords(this))
      
    }
    download(fileName) {
        if(!fileName) {
            fileName = 'default.svg'
        }
            var url = "data:image/svg+xml;utf8," + encodeURIComponent(paper.project.exportSVG({asString:true}));
            var link = document.createElement("a");
            link.download = fileName;
            link.href = url;
            link.click();
    }
}


module.exports = Product;