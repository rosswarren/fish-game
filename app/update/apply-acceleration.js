const gameObjects = require('../game-objects');

module.exports = (delta) => {
    gameObjects.forEach((gameObject) => {
        gameObject.position.x = gameObject.position.x + (gameObject.acceleration.x * (delta / 10000));
        gameObject.position.y = gameObject.position.y + (gameObject.acceleration.y * (delta / 10000));

        gameObject.render.call(gameObject);
    });
};
