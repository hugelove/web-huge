import React, { Component } from 'react'
import './index.css'
import nanoid from 'nanoid'

export default class Item extends Component {
  state = {mouse:false}

  // 鼠标移入移出
  handleMouse = (flag) => {
    return () => {
      this.setState({mouse:flag})
    }
  }

  // 勾选取消
  handleChecked = (id) => {
    return (event) => {
      this.props.changeIsDone(id,event.target.checked)
    }
  }

  // 删除
  handleDelete = (id) => {
    return () => {
      if((window.confirm('你确定删除吗？'))){
        this.props.deleteTodo(id)
      }
    }
  }
  /**
   * defaltChecked:首次有作用
   * checked
   * **/ 

  render() {
    const {id,name,done} = this.props
    const mouse  = this.state.mouse
    return (
        <li style={{backgroundColor:mouse ? '#ddd':'#fff'}} 
            onMouseEnter={this.handleMouse(true)} 
            onMouseLeave={this.handleMouse(false)}>
          <label>
            <input type="checkbox" checked={done} onChange={this.handleChecked(id)}/>
            <span>{name}</span>
          </label>
          <button className="btn btn-danger btn-none" style={{display:mouse?'block':'none'}} onClick={this.handleDelete(id)}>删除</button>
        </li>
    )
  }
}
