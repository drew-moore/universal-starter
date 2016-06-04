const webpackMerge = require( 'webpack-merge' ),
  webpack = require( 'webpack' ),
  commonConfig = require( './webpack.common.js' ),
  path = require('path'),
  helpers = require( './helpers' );


const clientConf = webpackMerge( {}, commonConfig, {
    target: 'web',
    entry : './src/client',

    devtool: 'source-map',

    output: {
      path: path.join( helpers.root('dist'), 'client' ),
      filename: 'client.js'
    },
    node  : {
      global    : true,
      __dirname : true,
      __filename: true,
      process   : true,
      Buffer    : false
    }

  } ),

  serverConf = webpackMerge( {}, commonConfig, {

    target : 'node',
    entry  : './src/server',
    devtool: 'source-map',

    output   : {
      path: path.join( helpers.root( 'dist' ), 'server' ),
      filename: 'server.js'
    },
    externals: checkNodeImport,
    node     : {
      global    : true,
      __dirname : true,
      __filename: true,
      process   : true,
      Buffer    : true
    }

  } );

// Helpers
function checkNodeImport(context, request, cb) {
  if (!path.isAbsolute( request ) && request.charAt( 0 ) !== '.') {
    cb( null, 'commonjs ' + request );
    return;
  }
  cb();
}

//exporting array enables webpack's multi-compiler mode: https://github.com/webpack/webpack/tree/master/examples/multi-compiler
module.exports = [
  clientConf,
  serverConf
];
