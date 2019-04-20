const webpack = require('webpack')
const merge = require('webpack-merge')
const argv = require('minimist')(process.argv.slice(2))
const HtmlWebpackPlugin = require('html-webpack-plugin')

const commonConfigGenerator = require('./common')
const translation = require('./translation')
const paths = require('./paths')
const entries = require('./entries')

const lang = argv.lang || translation.langCodes.en
const app = argv.app || 'training'

module.exports = merge(commonConfigGenerator(app, entries[app], lang), {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.TRAINING_TEMPLATE_HTML
    })
  ],
  watch: true
})
