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
        // Creates `style` nodes from JS strings
        // 'style-loader',
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader',
      ],
      // test: /\.scss$/,
      // loaders: ['css-loader', 'sass-loader?includePaths[]='
      //   + path.resolve(__dirname, './node_modules/compass-mixins/lib')
      //   + '&includePaths[]='
      //   + path.resolve(__dirname, './node_modules/clappr/src/base/scss')
      //   + '&includePaths[]='
      //   + path.resolve(__dirname, './src/base/scss')
      // ],
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
    // publicPath: '<%=baseUrl%>/',
    filename: filename,
    library: 'AudioTrackSelector',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
};
