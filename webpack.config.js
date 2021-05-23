const path = require('path')
      ,webpack = require('webpack')
      ,VueLoaderPlugin = require('vue-loader/lib/plugin')
      ,HtmlWebpackPlugin = require('html-webpack-plugin')
      ,{CleanWebpackPlugin} = require('clean-webpack-plugin')
      ,MiniCssExtractPlugin = require('mini-css-extract-plugin');
      
module.exports = {
    entry: {
        polyfill: '@babel/polyfill'
        ,index: './src/index.js'
        ,vendor: ['axios','vue','vuex']
    }
    ,output: {
        path: path.resolve(__dirname, 'dist')
        ,filename: '[name].bundle.js'
        ,chunkFilename: '[name].chunk.js'
        ,publicPath:'./'
    }
    ,devServer: {
        contentBase: './'
    }
    ,optimization: {
        splitChunks: {
            chunks: 'all'
            ,automaticNameDelimiter: '.'
        }
    }
    ,module: {
        rules: [
            {test: /\.vue$/, use: 'vue-loader'}
            ,{test: /\.html$/, use: 'html-loader'}
            ,{test: /\.(sass|scss)$/, use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader']}
            ,{test: /\.(woff|woff2|svg|eot|ttf)$/, use: 'file-loader?name=files/[name].[ext]'}
            ,{test: /\.(jpg|jpeg|png|gif)$/, use: {
                loader: 'file-loader'
                ,options: {
                    name: 'images/[name].[ext]'
                    ,esModule: false
                }
            }}
            ,{test: /\.json$/, use: 'json-loader'}
            ,{test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']}
            ,{
                test: /\.(js|jsx)$/
                ,exclude: /(node_modules|bower_components)/
                ,use: {
                    loader: 'babel-loader'
                    ,options: {
                        presets: [
                            ['@babel/preset-env',{modules:false}]
                        ]
                        ,plugins: [
                            '@babel/plugin-syntax-dynamic-import'
                            ,'@babel/plugin-transform-modules-commonjs'
                        ]
                    }
                }
            }
            ,{
                test: /\.(ts|tsx)$/
                ,exclude: /(node_modules|bower_components)/
                ,use: [
                  {
                      loader: 'babel-loader'
                      ,options: {
                          presets: ['@babel/preset-env']
                          ,plugins: [
                              '@babel/plugin-syntax-dynamic-import'
                              ,'@babel/plugin-transform-modules-commonjs'
                          ]
                      }
                  },
                  {
                    loader: 'ts-loader'
                    ,options: { appendTsxSuffixTo: [/\.vue$/] }
                  }
                ]
            }
        ]
    }
    ,plugins: [
        new CleanWebpackPlugin()
        ,new VueLoaderPlugin()
        ,new MiniCssExtractPlugin('commons.css')
        ,new HtmlWebpackPlugin({template: './index.html'})
        ,new webpack.HotModuleReplacementPlugin()
    ]
    ,resolve: {
        //配置忽略资源扩展名
        extensions: ['.js', '.json', '.vue','.scss','.sass','.css','.ts']
        ,alias:{
            'vue$': 'vue/dist/vue.esm.js'
            ,'~components': path.join(__dirname, 'src/components')
            ,'~images': path.join(__dirname, 'src/source/images')
            ,'~common': path.join(__dirname, 'src/common')
            ,'~mixins': path.join(__dirname, 'src/mixins')
            ,'~views': path.join(__dirname, 'src/view')
            ,'~src': path.join(__dirname, 'src')
        }
    }
};