const getCoords = (Model) => {
    S = 0, k = 2, l = 2, d = 20, j = 10, m = 1, h = 3;
    a = Model.a, b = Model.b, c = Model.c;

    return  arr = [
            [S, 0], 
            [c, 0],
            [c,     d - k], 
            [c + l, d],
            [c + a, d + j],
            [c + a, d + a - j],
            [c,     d + a],
            ///правый верх
            [c + m, d + a + m],
            [c + a,     d + a + m],
            [c + a + d, d + a + m - h],
            [c + a + d, d + a + b - m + h],
            [c + a,     d + a + b - m],
            //правый низ
            [c + m, d + a + b - m],
            [c, d + a + b],
            [c + a, d + a + b + j],
            [c + a, d + a + b + a - j],
            [c + l, d + a + b + a],
            [c, d + a + b + a + l],
            [c, d + a + b + a + d],
    //Левая сторона от левой нижней точки
            [S, d + a + b + a + d],
            [S, d + a + b + a + l],
            [S - l, d + a + b + a ],
            [S - a, d + a + b + a - j],
            [S - a, d + a + b + j],
            //левый низ
            [S, d + a + b],
            [S - m,     d + a + b - m],
            [S - a, d + a + b - m],
            [S - a - d, d + a + b - m + h],
            [S - a - d, d + a + m - h],
            [S - a, d + a + m],
            //левый верх
            [S - m, d + a + m],
            [S, d + a],
            [S - a, d + a - j],
            [S - a, d + j],
            [S - k, d], 
            [S, d - l],
            [S, 0]
        ]
}

function downloadAsSVG(fileName) {
    if(!fileName) {
        fileName = 'default.svg'
    }
        var url = "data:image/svg+xml;utf8," + encodeURIComponent(paper.project.exportSVG({asString:true}));
        var link = document.createElement("a");
        link.download = fileName;
        link.href = url;
        link.click();
}

const render = (data) => {
	var myPath = new Path();
	myPath.strokeColor = 'black';
	myPath.strokeWidth = 1;
	var index = 3.7795
	
    data.forEach(function(coord) {
        myPath.add(new Point(coord[0] * index, coord[1] * index))
    })

    paper.view.update();    
    // downloadAsSVG(fileName);
}

module.exports = {
    getCoords,render, downloadAsSVG
}