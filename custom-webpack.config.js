console.log("BUILD WITH CUSTOMIZED WEBPACK")
module.exports = {
    module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              // `.swcrc` can be used to configure swc
              loader: "swc-loader"
            }
          }
        ]
      }
}