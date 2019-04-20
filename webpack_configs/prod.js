const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const _ = require('lodash')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const commongConfigGenerator = require('./common')
const translation = require('./translation')
const paths = require('./paths')
const entries = require('./entries')

module.exports = _.flattenDeep(
  Object.keys(entries).map(appName => {
    const appEntryUrl = entries[appName]
    return Object.keys(translation.langCodes).map(language => {
      return merge(commongConfigGenerator(appName, appEntryUrl, language), {
        mode: 'production',
        optimization: {
          minimizer: [
            new UglifyJsPlugin({
              parallel: true,
              sourceMap: false,
              uglifyOptions: {
                compress: {
                  drop_console: true
                },
                output: {
                  comments: false
                }
              }
            })
          ]
        },
        plugins: [
          new CleanWebpackPlugin(['public/**/*.js', 'public/**/*.map', 'public/**/*.html'], {
            root: path.resolve(__dirname, '..'),
            verbose: true
          }),
          new HtmlWebpackPlugin({
            inject: true,
            template: appName === 'admin' ? paths.ADMIN_TEMPLATE_HTML : paths.APP_TEMPLATE_HTML,
            filename: `dist/${appName}/index_${language}.html`,
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true
            }
          }),
          new webpack.NamedModulesPlugin(),
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
          })
        ]
      })
    })
  })
)
