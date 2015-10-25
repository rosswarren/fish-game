const gameObjects = require('../game-objects');
const boundary = require('../boundary');

module.exports = (delta) => {
    gameObjects.forEach((gameObject) => {
        gameObject.position.x = gameObject.position.x + (gameObject.acceleration.x * (delta / 10000));
        gameObject.position.y = gameObject.position.y + (gameObject.acceleration.y * (delta / 10000));

        if (gameObject.position.x > boundary.x) {
            gameObject.position.x = boundary.x;
            gameObject.acceleration.x = -gameObject.acceleration.x;
        }

        if (gameObject.position.x < 0) {
            gameObject.position.x = 0;
            gameObject.acceleration.x = -gameObject.acceleration.x;
        }

        if (gameObject.position.y > boundary.y) {
            gameObject.position.y = boundary.y;
            gameObject.acceleration.y = -gameObject.acceleration.y;
        }

        if (gameObject.position.y < 0) {
            gameObject.position.y = 0;
            gameObject.acceleration.y = -gameObject.acceleration.y;
        }

        gameObject.render.call(gameObject);
    });
};
