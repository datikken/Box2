const methods = require('./methods');

class Product {
    constructor(data) {
        this.a = data.height,
        this.b = data.width,
        this.c = data.length
    }
    render() {
        paper.install(window);
    	paper.setup('cardboardbox');

        const data = methods.getCoords(this);
        var myPath = new Path();
        myPath.strokeColor = 'black';
        myPath.strokeWidth = 1;
        var index = 3.7795
        
        data.forEach(function(coord) {
            myPath.add(new Point(coord[0] * index, coord[1] * index))
        })
        paper.view.update();
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
            //clear canvas after download
            const canvas = document.getElementById('cardboardbox')
            const context = canvas.getContext('2d')
            context.clearRect(0, 0, canvas.width, canvas.height);
    }
}


module.exports = Product;