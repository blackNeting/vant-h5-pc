# van-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

<!-- 关于h5适配
1：可以使用postcss-px-to-viewport 将px转换为vw 或者 vh 详细的配置查看postcss.config.js


2：也可以使用postcss-pxtorem + lib-flexible 转换为rem  如果想要适配pc的话，可以单独使用postcss-pxtorem 在main.js中无需引入
在inde.html中添加监听事件，将最大的font-size设置为合理的值，比如100px,然后给页面设置单独的max-width margin 0 auto 这样就会居中显示，多余部分留白，需要注意的是样式需要定义在css中，内联样式是无法转化的，如果不想转换px的话只需要 pX 或者Px，具体的配置请查看.postcss.js文件 -->
### 测试
test
