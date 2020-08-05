var path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin")

const htmlPluginWebsite = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "index.html",
    chunks: ["main"]
})

const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: "./assets/[name].css"
})

module.exports = {
    mode: 'development', // "production" | "development" | "none"
    entry: {
        main: "./src/index",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"],
                    }
                }
            },
            {
                test: /\.(s*)css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                  },
                  'css-loader',
                  'sass-loader',
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "fonts/",
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.(png|jp(e*)g|gif|svg)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "images/",
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        htmlPluginWebsite,
        miniCssExtractPlugin
    ],
    devServer: {
        historyApiFallback: true,
        open: true
    },
}
