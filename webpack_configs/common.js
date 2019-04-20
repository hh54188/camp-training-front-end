const HappyPack = require('happypack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const I18nPlugin = require('i18n-webpack-plugin')

const paths = require('./paths')
const translation = require('./translation')

module.exports = function generateCommonConfig(
  entryName,
  entryUrl,
  language = translation.langCodes.en
) {
  return {
    entry: {
      [entryName]: entryUrl
    },
    output: {
      filename: `dist/${entryName}/bundle_${language}.js`,
      path: paths.PUBLIC_DIR,
      publicPath: '/'
    },
    plugins: [
      new HappyPack({
        loaders: ['babel-loader']
      }),
      new I18nPlugin(translation.languages[entryName][language])
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        },
        {
          test: /\.js|jsx$/,
          exclude: /node_modules/,
          loaders: ['babel-loader']
        },
        {
          test: /\.less$/,
          loaders: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]--[hash:base64:5]'
              }
            },
            {
              loader: 'less-loader',
              options: { javascriptEnabled: true }
            }
          ]
        },
        {
          test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000'
        }
      ]
    }
  }
}
