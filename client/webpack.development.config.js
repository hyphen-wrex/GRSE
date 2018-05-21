const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [autoprefixer()],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      Lib: path.resolve(__dirname, 'src/lib/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Actions: path.resolve(__dirname, 'src/actions/'),
      Reducers: path.resolve(__dirname, 'src/reducers/'),
      Containers: path.resolve(__dirname, 'src/containers/'),
    },
  },
  devtool: 'cheap-module-source-map',
};
