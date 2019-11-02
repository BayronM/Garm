module.exports = {
    entry: __dirname + '/src',
    mode: 'development',
    output: {
        path: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    }
};