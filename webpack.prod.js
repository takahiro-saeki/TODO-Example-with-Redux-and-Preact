const path = require("path");
const webpack = require("webpack");
const Merge = require("webpack-merge");
const common = require("./webpack.common.js");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const analyzerConfig = require("./build/analyzerConfig");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = Merge(common, {
  entry: "./js/index.js",
  output: {
    filename: "pokedex.bundle.min.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "kobo/genre page multiple",
      template: path.join(__dirname, "./src/index.ejs")
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ja|it/),
    new LodashModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new BundleAnalyzerPlugin(analyzerConfig)
  ]
});
