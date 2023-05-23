// 引入react核心库
import React from 'react';
// 引入reactdom 用于做渲染
import ReactDOM from 'react-dom';
// 引入App组件
import App from './App';
// 渲染App到页面
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
