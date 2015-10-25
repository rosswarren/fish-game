const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './app/main.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/assets/',
        filename: 'bundle.js'
    }
};
