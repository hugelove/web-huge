// 创建“外壳”组件App
import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
export default class App extends Component{
  state = {
    todos:[
      {id:'001',name:'学习',done:true},
      {id:'002',name:'健身',done:true},
      {id:'003',name:'跳舞',done:true},
      {id:'004',name:'睡觉',done:false},
      {id:'005',name:'还是学习',done:false},
    ]
  } 

  // addTodo用于添加一个代办项目，接收的参数是todo对象
  addTodo = (todoObj) => {
    // 获取原todos
    const todos = this.state.todos
    // 追加一个todo
    const newTodos = [todoObj,...todos]
    // 更新状态
    this.setState({todos:newTodos}) 
  }

  //改变待办事项完成状态
  changeIsDone = (id,done) => {
    // 获取状态todos
    const todos = this.state.todos
    const newTodos = todos.map(todoObj => {
      if(todoObj.id === id) return {...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  // deleteTodo用于删除一个todo对象
  deleteTodo = (id) => {
    // 获取原来的todos
    const todos = this.state.todos
    // 删除指定id的todo对象
    const newTodos = todos.filter(item => {
      return item.id !== id
    })
    // 更新状态
    this.setState({todos:newTodos})
  }

  //全选
  checkedAllTodo = (done) => {
    // 获取原来todos
    const todos = this.state.todos
    const newTodos = todos.map(item => {
      return {...item,done}
    })
    // 更新状态
    this.setState({todos:newTodos})
  }

  // 清除所有done:true
  clearAllFinished = () => {
    // 获取原来todos
    const todos = this.state.todos
    const newTodos = todos.filter(item => {
      return !item.done
    })
    // 更新状态
    this.setState({todos:newTodos})
  }
  
  render(){
    const {todos} = this.state
    return (
      <div className="todo-container">
      <div className="todo-wrap">
        <Header floppy={this.addTodo}/>
        <List todos={todos} changeIsDone={this.changeIsDone} deleteTodo={this.deleteTodo}/>
        <Footer todos={todos} checkedAllTodo={this.checkedAllTodo} clearAllFinished={this.clearAllFinished}/>
      </div>
    </div>
    )
  }
}
