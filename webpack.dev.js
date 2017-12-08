const path = require("path");
const webpack = require("webpack");
const Merge = require("webpack-merge");
const common = require("./webpack.common.js");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const analyzerConfig = require("./build/analyzerConfig");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = Merge(common, {
  entry: ["babel-polyfill", "react-hot-loader/patch", "./js/index.js"],
  output: {
    filename: "app.bundle.min.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  devtool: "#source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    publicPath: "/",
    historyApiFallback: true,
    open: true,
    openPage: "",
    port: 9843,
    inline: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "kobo/genre page multiple",
      template: path.join(__dirname, "./src/index.ejs")
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
