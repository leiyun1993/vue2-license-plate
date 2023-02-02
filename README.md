# vue-license-plate

### 介绍
* vue-license-plate是一款基于vue2的车牌号输入控件。

### vue3版本
[vue3-license-plate](https://github.com/leiyun1993/vue3-license-plate)
### 微信小程序版本
[mp-license-plate](https://github.com/leiyun1993/mp-license-plate)

### 项目中使用
* 下载

```
npm install vue-license-plate
```
* 在main.js中加入

```
import LicensePlate from 'vue-license-plate'
import 'vue-license-plate/lib/licensePlate.css'
Vue.use(LicensePlate);
```
* 在需要的页面中使用

```
licensePlate: "川A00001"

<LicensePlate v-model="licensePlate" @change="change"></LicensePlate>

change(val){
	console.log(val.array)	//数组形式
	console.log(val.value)	//字符串形式
	console.log(val.pass)	  //是否验证通过
}
```
* 展示如下

![](https://github.com/leiyun1993/vue2-license-plate/raw/master/screenshot/s1.png)

## API

### Props
名字|类型|默认值|说明
--|--|--|--
v-model|String|""| 默认车牌号
autoShow|Boolean|false| 自动展示键盘
borderColor|String|#79aef3| 输入框边框颜色
borderActiveColor|String|#330aec| 输入框选中的边框颜色
borderWidth|Number|1| 边框宽度
borderRadius|Number|6| 边框圆角
fontColor|String|#333333| 文字颜色
fontSize|Number|16| 文字大小

### Events
名字|说明|回调参数
--|--|--
@change|输入改变时触发|{array:[],value:string,pass:false}


## Change Log
* 1.0.4

自动展示键盘

* 1.0.3

修复文档错误

* 1.0.2

替换资源文件为icon

* 1.0.1

修复bug

* 1.0.0

首次发版



## License
[MIT](https://github.com/leiyun1993/vue2-license-plate/blob/master/LICENSE)
