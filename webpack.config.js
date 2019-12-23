const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const devMode = process.env.NODE_ENV !== 'production'

// Configs
const distJsFilename = 'tictactoe'  // The name of the output javascript file
const pathPublic = 'public'         // The public folder path

console.log('devMode:', devMode)

module.exports = {
    mode: devMode ? 'development' : 'production',
    entry: [
        './src/index.js',
        './src/index.sass'
    ],
    output: {
        path: path.resolve(__dirname, `${pathPublic}`),
        filename: devMode ? `${distJsFilename}.js` : `${distJsFilename}.min.js`,
        libraryTarget: 'var',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { url: false, sourceMap: devMode }
                    }, {
                        loader: 'sass-loader',
                        options: { sourceMap: devMode }
                        // options: { sourceMap: (devMode === 'development') }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "app.css"
        }),
    ],
    resolve: {
        extensions: ['.js', '.json']
    },
    devtool: 'source-map',
    devServer: {
        contentBase: [
            path.join(__dirname, pathPublic),
        ],
        compress: true,
        liveReload: true,
        port: 9001
    },
}