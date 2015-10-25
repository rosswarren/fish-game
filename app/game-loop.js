'use strict';

const gameLoopFunctions = [];

let previousTime;

const gameLoop = () => {
    window.requestAnimationFrame(() => {
        const currentTime = performance.now();
        const delta = currentTime - previousTime;
        previousTime = currentTime;

        gameLoopFunctions.forEach((gameLoopFunction) => {
            gameLoopFunction.call(null, delta);
        });

        gameLoop();
    });
};

module.exports = {
    start: () => {
        previousTime = performance.now();
        gameLoop();
    },
    addLoopFunction: (newFunction) => {
        gameLoopFunctions.push(newFunction);
    }
};
