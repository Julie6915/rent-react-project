//导入react和react-dom两个包
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// 导入anted-mobile样式
import 'antd-mobile/dist/antd-mobile.css'

// 导入字体图表库的样式文件
import './assets/fonts/iconfont.css'

// 自己写的全局样式应放在组件样式后，否则会被覆盖
import './index.css'
//创建元素

//渲染到页面
ReactDOM.render(<App/>,document.getElementById('root'))