const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  mode: "development",
  output: {
    filename: "bundle.[fullhash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(pdf|png|svg|jp(e*)g|gif)$/,
        exclude: /node_modules/,
        use: "file-loader?name=[path][name].[ext]",
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".*", ".js", ".jsx", ".tsx", ".ts"],
    alias: {
      "@pages": path.join(__dirname, "src", "pages"),
      "@public": path.join(__dirname, "public"),
      "@components": path.join(__dirname, "src", "components"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
  ],
  devServer: {
    static: path.join(__dirname, "./src"),
    port: 4000,
    hot: "only",
    compress: true,
    open: true,
    historyApiFallback: true,
  },
};
