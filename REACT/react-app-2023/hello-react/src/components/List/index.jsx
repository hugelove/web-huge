import React, { Component } from 'react'
// 引入校验
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

  //对接收的props进行：类型，必要性的限制
  static propTypes = {
    todos:PropTypes.array.isRequired,
    changeIsDone:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired
  }

  render() {
    const todos = this.props.todos
    const changeIsDone = this.props.changeIsDone
    const deleteTodo = this.props.deleteTodo
    return (
      <ul className="todo-main">
        {
          todos.map((todo)=>{
            return <Item key={todo.id} {...todo} changeIsDone={changeIsDone} deleteTodo={deleteTodo}/>
          })
        }
      </ul>
    )
  }
}
