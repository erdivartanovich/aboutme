module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "./dist/app.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};