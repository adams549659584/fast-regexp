const path = require('path');

function resolve(dir) {
  const fullPath = path.join(__dirname, dir);
  return fullPath;
}

module.exports = {
  publicPath: '/',
  lintOnSave: true,
  filenameHashing: false,
  // webpack目录别名alias
  // https://cli.vuejs.org/zh/guide/css.html#引用静态资源
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src')).set('Kpublic', resolve('public'));
  },
  // 需编译的模块
  transpileDependencies: [
    // 'vuex-module-decorators'
  ],
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  configureWebpack: {
    // 不打包的外部扩展
    // key值是：'vue' (这个值是import from 'vue'时用的名称）
    // value值是：'Vue' (这个值是通过script方式引入js库后它的全局变量 ，这时vue库的全局变量是首字母大写的 'Vue'
    externals: {
      // vue: 'Vue',
      // vuex: 'Vuex',
      // axios: 'axios',
      // 'vue-router': 'VueRouter',
    },
    output: {
      jsonpFunction: 'jsonpFunction',
      filename: `js/[name].js?h=[hash:8]`,
      chunkFilename: `js/[name].js?h=[hash:8]`,
    },
  },
};
