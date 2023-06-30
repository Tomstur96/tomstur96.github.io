const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
      },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'homepage.html',
            title: 'Burrito Man',
            template: '/src/index.html',
            // favicon: 'src/assets/images/favicon-16x16.png',
        }),
        new MiniCssExtractPlugin({
            filename: 'mainStyle.css',
        }),
      ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        // assetModuleFilename: 'assets/images/[name] [ext]',
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'assets/images/',
                  publicPath: 'assets/images/',
                }
              },
            ],
            // type: 'asset/resource',
          },
        ],
      },
    optimization: {
        runtimeChunk: 'single',
    },
};