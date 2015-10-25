const boundary = require('../boundary');
const camera = require('../camera');
const context = require('../context');
const canvas = require('../canvas');
const gameObjects = require('../game-objects');

const background = new Image();
background.src = '/under-the-sea.jpg';

background.onload = () => {
};

module.exports = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(background, -camera.position.x, -camera.position.y, boundary.x, boundary.y);

    gameObjects.forEach((gameObject) => {
        gameObject.render.call(gameObject);
    });
};
