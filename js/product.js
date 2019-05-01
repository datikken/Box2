const Model = require('./app');



const box = new Model({height: 50, width: 50, length: 50});

box.init();
box.draw();
// box.downloadBottom();