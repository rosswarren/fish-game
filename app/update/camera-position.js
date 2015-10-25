const camera = require('../camera');
const player = require('../player');
const canvas = require('../canvas');
const boundary = require('../boundary');

module.exports = () => {
    camera.position.x = player.position.x - (canvas.width / 2);
    camera.position.y = player.position.y - (canvas.height / 2);

    if (camera.position.x < 0) {
        camera.position.x = 0;
    }

    if (camera.position.y < 0) {
        camera.position.y = 0;
    }

    if (camera.position.x > (boundary.x - canvas.width)) {
        camera.position.x = (boundary.x - canvas.width);
    }

    if (camera.position.y > (boundary.y - canvas.height)) {
        camera.position.y = (boundary.y - canvas.height);
    }
};
