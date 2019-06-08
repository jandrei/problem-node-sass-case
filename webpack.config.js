

var path = require('path')


module.exports = {
    context: __dirname + "/src/",
    entry: ['./app/libs.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
        {
            test: /\.scss$/,
            use: [
                {loader:"style-loader"}, // creates style nodes from JS strings
                {loader:"css-loader"}, // translates CSS into CommonJS
                {loader:"postcss-loader"},
                {
                    loader:"sass-loader",
                     options:{
                        implementation: require("node-sass"),
                     }
                }, // compiles Sass to CSS, using Node Sass by default
                {loader:"file-loader"}, // translates CSS into CommonJS
                
            ]
        },
        {
            test: /\.css$/,
            use: [
                {loader:"style-loader"}, // creates style nodes from JS strings
                {loader:"css-loader"}, // translates CSS into CommonJS
            ]
        },
        {
            test: /\.(png|jpe?g|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {},
              },
            ],
          },]
    }

}
