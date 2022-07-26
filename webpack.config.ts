import path from 'path';
import process from 'process';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import TextFileWebpackPlugin from 'text-file-webpack-plugin';
import { type Configuration } from 'webpack';

const config: Configuration = {
  devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : 'source-map',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|ttf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  output: {
    clean: true,
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: path.resolve('public', 'favicon.png'),
      meta: {
        author: 'Joshua Unrau',
        description: 'Joshua Unrau is a software developer specializing in Python and JavaScript'
      },
      title: 'Joshua Unrau'
    }),
    new TextFileWebpackPlugin({
      filename: 'CNAME',
      text: 'joshuaunrau.com'
    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    },
    extensions: ['.tsx', '.ts', '.js']
  }
};

export default config;
