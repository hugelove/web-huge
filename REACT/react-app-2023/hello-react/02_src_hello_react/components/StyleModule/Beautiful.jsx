import React, { Component } from 'react'
import BeautifulType from './Beautiful.module.css'

export default class Beautiful extends Component {
  render(){
    return <h2 className={BeautifulType.title}>
      我是和hello一样的class title
      <span className={BeautifulType.sp}>就是实现样式的模块化，样式不冲突</span>
    </h2>
  }
}