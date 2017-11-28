const  path = require('path')
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "app.js"
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader'
              ]
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/,
              use: [
                'file-loader'
              ]
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: [
                'file-loader'
              ]
            }
          ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
};