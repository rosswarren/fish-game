'use strict';

const gameObjects = require('./game-objects');
const player = require('./player');
const gameLoop = require('./game-loop');

gameObjects.push(player);

gameLoop.addLoopFunction(require('./update/camera-position'));
gameLoop.addLoopFunction(require('./update/handle-input'));
gameLoop.addLoopFunction(require('./update/apply-acceleration'));
gameLoop.addLoopFunction(require('./update/decay-acceleration'));
gameLoop.addLoopFunction(require('./update/cull-bubbles'));
gameLoop.addLoopFunction(require('./update/random-bubble-movement'));
gameLoop.addLoopFunction(require('./update/create-new-bubbles'));
gameLoop.addLoopFunction(require('./render/labels'));
gameLoop.addLoopFunction(require('./render/render'));

gameLoop.start();
