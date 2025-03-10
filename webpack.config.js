const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production", // Asegura que Webpack haga optimización para producción
  entry: "./src/index.js", // Cambia esto según la ruta de tu archivo de entrada
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Limpia la carpeta 'dist' en cada build
  },
  optimization: {
    minimize: true, // Habilita la minificación
    minimizer: [new TerserPlugin()], // Usa Terser para minificar JS
  },
};
