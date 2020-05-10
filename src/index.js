   // index.js 项目的入口文件

   //使用es6提供的 导入模块的方式
   import $ from 'jquery';

   // 下载包 webpack  webpack-cli
   //  webpack .\src\index.js -o .\dist\main.js  使用webpack命令

   //使用es6的语法 导入css文件  import  'css路径
    import './css/index.css'
   //webpack 目前只能处理js文件 ， 没有办法处理非js文件
   // 解决： 使用合适的第三方loader加载器

   // 导入less
   import './css/index.less'

   //导入sass
   import './css/index.scss'
   // import '../node_modules/bootstrap/dist/css/bootstrap.css'
   //  可以不写node_modules   它会自动去找 node_modules 中去找
   import 'bootstrap/dist/css/bootstrap.css'

   //使用es6高级语法 测试

   class Person {
       static obj = {name: "小明"};
   }
   console.log(Person.obj);

   // 每次修改一次 都要重新打包
   $(function () {
       $('li:odd').css("background",'blue');
       $('li:even').css("background",'red');

   })