module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave:false,
  devServer:{
    proxy:(()=>{
      if(!process.env.VUE_APP_BACK_END_URL){
          return false;
      }
      const config = {}
      const basePath = process.env.VUE_APP_BASE_PATH.endsWith('/')
          ? process.env.VUE_APP_BASE_PATH
          : process.env.VUE_APP_BASE_PATH + '/'
      
      const path = basePath+"api/"
      config[path] = {
        target:process.env.VUE_APP_BASE_PATH,
        changeOrigin:true,
        pathRewirite:{}
      }
    })()
  }
}
