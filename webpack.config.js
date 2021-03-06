module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
      vuex: 'vuex/dist/vuex.js',
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }
    ],
    loaders: [
      {
       test: /\.js$/,
       loader: 'babel-loader',
       exclude: /node_modules/,
       query:
        {
          presets: ['es2015','stage-0']
        }
      }
    ]
  }
};
