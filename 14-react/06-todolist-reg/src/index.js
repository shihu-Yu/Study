// 测试文件
import React from 'react'
import ReactDom from 'react-dom'
import App from './App.js'
// 从React-redux引入Produx用来关联react以及redux
import { Provider } from 'react-redux'

// ReactDom.render(<Provider store={store}><App /></Provider>,document.getElementById('root'))
ReactDom.render(<App />,document.getElementById('root'))

