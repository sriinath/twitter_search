const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist/build')
    },
    resolve: {
        extensions: [ '.js', 'jsx' ]
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                      // Limit at 50k. Above that it emits separate files
                      limit: 50000,
                      mimetype: "application/font-woff",
                      // Output below fonts directory
                      name: "./fonts/[name].[ext]"
                    }
                }
            }
        ]
    },
    plugins:[
       new HtmlWebpackPlugin({
          template: './index.html'
       })
    ]
};