module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
  noParse: [/.*(pixi\.js).*/],
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
      }
    }
  ]},
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    contentBase: './',
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3000
  }
};