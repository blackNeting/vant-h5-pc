module.exports = {
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75;
      },
      propList: ['*'],
    },
    // 'postcss-pxtorem': {
    //   rootValue: 75,
    //   propList: ['*'],
    //   exclude: /node_modules|folder_name/i
    // }
  },
}
