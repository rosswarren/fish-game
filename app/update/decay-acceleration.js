const gameObjects = require('../game-objects');

module.exports = (delta) => {
    const decayFactor = 5;

    gameObjects.forEach((gameObject) => {
        if (gameObject.acceleration.x > 0) {
            gameObject.acceleration.x -= delta / decayFactor;
        }

        if (gameObject.acceleration.x < 0) {
            gameObject.acceleration.x += delta / decayFactor;
        }

        if (gameObject.acceleration.y < 0) {
            gameObject.acceleration.y += delta / decayFactor;
        }

        if (gameObject.acceleration.y > 0) {
            gameObject.acceleration.y -= delta / decayFactor;
        }
    });
};
