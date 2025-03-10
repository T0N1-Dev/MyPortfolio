const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production", 
  entry: "./src/index.js", 
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, 
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ], 
  },
};
