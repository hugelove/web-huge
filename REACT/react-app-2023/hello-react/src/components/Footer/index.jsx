import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {


  // 全选
  handleAllChecked = (event) => {
    this.props.checkedAllTodo(event.target.checked)
  }

  /**
   * 清除全部已经完成
   * 即所有done:true的清除
   * **/ 
  handleClearAll = () => {
    this.props.clearAllFinished()
  }

  render() {
    const todos = this.props.todos
    // 已完成的就是done为true
    const finished = todos.reduce((pre,current)=>{
       return pre + (current.done ? 1 : 0)
    },0)
    // 全部就是todos的长度
    const total = todos.length
    return (
      <div className="todo-footer">
          <label>
            <input type="checkbox" checked={finished === total && total !== 0 ? true : false} onChange={this.handleAllChecked}/>
          </label>
          <span>
            <span>已完成{ finished }</span> / 全部{ total }
          </span>
          <button className="btn btn-danger" onClick={this.handleClearAll}>清除已完成任务</button>
        </div>
    )
  }
}
