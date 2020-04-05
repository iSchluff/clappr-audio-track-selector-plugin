const path = require('path');
const filename = 'audio-track-selector.js'

module.exports = {
  entry: path.resolve(__dirname, 'src/main.js'),
  externals: {
    clappr: {
      amd: 'clappr',
      commonjs: 'clappr',
      commonjs2: 'clappr',
      root: 'Clappr'
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
          compact: true,
      }
    }, {
      test: /\.s[ac]ss$/i,
      use: [
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader',
      ],
      include: path.resolve(__dirname, 'src'),
    }, {
      test: /\.html$/,
      loader: 'html-loader',
      options: {
        minimize: false
      }
    }],
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: filename,
    library: 'AudioTrackSelector',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
};
