import webpack from 'webpack'
import path from 'path'
import htmlWebpackPlugin from 'html-webpack-plugin'
const htmlwebpackPluginConfig = new htmlWebpackPlugin ({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})
const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
}

const LAUNCH_COMMAND = process.env.npm_lifecycle_event

const isProduction = LAUNCH_COMMAND === 'production'


const base = {
  entry: [
    PATHS.app,
  ],
  output: {
    path: PATHS.build,
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },
}

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  plugins: [htmlwebpackPluginConfig]
}

const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [htmlwebpackPluginConfig, productionPlugin]
}

export default Object.assign({}, base,
  isProduction === true ? productionConfig : developmentConfig
)
