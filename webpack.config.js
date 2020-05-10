//  webpack的 配置路径
//  由于webpack是基于node进行构建的 所以在webpack配置文件中 任何合法的node代码 都是支持的
//  简化打包命令
const path = require('path');

//导入在内存中生成html页面的插件
// 该插件的作用 自动在内存中 根据指定的页面 生成了一个内存中的页面
// 自动把内存中打包好的js文件 追加到了页面中
const htmlWebpackPlugin = require('html-webpack-plugin')

//通过node操作的模块中， 向外暴露出一个配置对象

module.exports = {
    mode:'development',
    //配置入口文件
    entry:path.join(__dirname,'./src/index.js'),
    //出口文件  指定要打包到哪一个目录
    output:{
        path: path.join(__dirname,"./dist"), // 打包的目录
        filename:'main.js',  //打包后的文件名
    },

    //所有的webpack插件，一般都要配置到这个节点上
    plugins:[
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), //指定的模板路径
            filename: 'index.html'   //设置生成内存页面的名称
        })
    ],
    //配置所有第三方模块
    module:{
        // 模块匹配规则
        rules:[
            //  如果匹配到 后缀名为 css的文件 则 可以使用 use中的加载器
            //  转义符 \ 不能掉 否则 . 会被当成任意字符
            { test: /\.css$/, use:['style-loader', 'css-loader','postcss-loader'] },
            { test: /\.less$/, use:['style-loader', 'css-loader','less-loader'] },
            { test: /\.scss$/, use:['style-loader', 'css-loader','sass-loader'] },

            //1.传参 ?limit=18670 ==> 通过图片字节大小 若图片的字节 大于你设置的标准， 则显示路径 否则显示base64格式
            // 2.该图片名被编译成唯一的hash值 一共32位 ， 继续传参 设置自己的图片名
            { test: /\.(jpg|png|gif|jpeg|svg)$/, use: 'url-loader?limit=1000&name=[hash:10][name].[ext]' },
            //3. 为了防止图片名重复 在图片名的前面 设置一个hash值 10位  [hash:] 避免名字相同的图片 相冲突 可以设置hash值
            // 而且位数可以自己设置
            //4.配置字体图标
            {test:/\.(ttf|woff2|woff|eot)$/,use:['url-loader']},

            // 5.使用babel处理更高级的js语法
            { test:/\.js$/,use:'babel-loader', exclude:/node_modules/ }




        ]
    }

}
//  配置完之后 在终端输入 webpack 就可以进行  简化代码