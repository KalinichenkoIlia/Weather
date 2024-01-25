const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');


module.exports = {
    entry: path.resolve(process.cwd(), './src/index.tsx'),
    output: {
        path: path.resolve(__dirname, "/dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js","jsx", ".json", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /.([cm]?ts|tsx)$/,
                exclude: /node_modules/,
                use: {loader: "ts-loader"},
            },
            {
                test:/\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new ForkTsCheckerNotifierWebpackPlugin({
            title: 'TypeScript',
            excludeWarnings: false,
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};