const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/root.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react"]
          }
        }
      }
    ]
  }
}

