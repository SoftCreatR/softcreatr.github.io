module.exports = {
  publicPath: "./",
  productionSourceMap: false,
  chainWebpack(config) {
    // Only convert .svg files that are imported by these files as Vue component
    const FILE_RE = /\.(vue|js|ts|svg)$/

    // Use vue-cli's default rule for svg in non .vue .js .ts files
    config.module.rule('svg').issuer(file => !FILE_RE.test(file))

    // Use our loader to handle svg imported by other files
    config.module
      .rule('svg-component')
      .test(/\.svg$/)
      .issuer(file => FILE_RE.test(file))
      .use('vue')
      .loader('vue-loader')
      .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader')
  },
  pwa: {
    themeColor: "#ffffff",
    msTileColor: "#209cee",
    appleMobileWebAppCache: "yes",
    manifestOptions: {
      background_color: "#ffffff"
    },
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-150x150.png'
    },
    workboxOptions: {
      exclude: ['CNAME'],
    }
  }
};
