import React, { Component } from 'react'
// 引入校验
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

  //对接收的props进行：类型，必要性的限制
  static propTypes = {
    floppy:PropTypes.func.isRequired
  }


  handleAddItem = (event) => {
    const {keyCode,target} = event
    if(target.value === ''){
      alert('输入数据不能为空')
      return
    }
    if(keyCode !== 13) return
    // 准备好一个todo对象
    const todoObj = { id:nanoid(),name:target.value,done:false }
    this.props.floppy(todoObj)
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.handleAddItem} placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
