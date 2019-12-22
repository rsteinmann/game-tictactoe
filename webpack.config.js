const path = require('path')
const devMode = process.env.NODE_ENV !== 'production'

console.log('devMode:', devMode)

module.exports = {
    mode: devMode ? 'development' : 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: devMode ? 'addressAutofill.js' : 'addressAutofill.min.js',
        libraryTarget: 'var',
        library: 'AddressAutofill',
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
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    devtool: 'source-map',
    devServer: {
        contentBase: [
            path.join(__dirname, 'public'),
        ],
        compress: true,
        liveReload: true,
        port: 9001
    },
}