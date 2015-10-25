const gameObjects = require('../game-objects');
const camera = require('../camera');

module.exports = () => {
    const player = gameObjects[0];

    document.getElementById('playerPosition').innerText = `${Math.round(player.position.x)}, ${Math.round(player.position.y)}`;
    document.getElementById('cameraPosition').innerText = `${Math.round(camera.position.x)}, ${Math.round(camera.position.y)}`;
    document.getElementById('bubblesCount').innerText = gameObjects.length - 1;
};
