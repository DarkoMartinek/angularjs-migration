module.exports = {
    entry: './src/app/main.ts',
    output: {
        filename: '../src/dist/bundle.js'
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    mode: 'development',
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
};
