/**
 * map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
 *  map() 方法使用为每个数组元素调用函数的结果创建新数组。
 *  map() 方法按顺序为数组中的每个元素调用一次提供的函数。
 *  map() 对没有值的数组元素不执行函数。
 *  map() 不会改变原始数组。
 * **/
// 举例1
const arrayOne = [1,2,4,5,19,10]
const newArrayOne = arrayOne.map(item => {
  return item*2
})
console.log('newArrayOne----',newArrayOne)
// 简写
const newArrayOne1 = arrayOne.map(item => item*2)
console.log('newArrayOne1--简写',newArrayOne1)


// 举例2 稀疏数组 没有值的数组元素
//callbackFn 仅在已分配值的数组索引处被调用。它不会在稀疏数组中的空槽处被调用。
const arrayDif = [4,5,,6]
const arrayDifNew = arrayDif.map(item => item*2)
// 稀疏数组在使用 map() 方法后仍然是稀疏的。空槽的索引在返回的数组中仍然为空，并且回调函数不会对它们进行调用。
console.log('依旧稀疏---',arrayDifNew)

// 举例3
/***
 * map 实现对象全名拼接
 * ***/
const personNameList = [
  {firstName:'胡',lastName:'歌'},
  {firstName:'白',lastName:'居易'},
  {firstName:'杜',lastName:'甫'},
  {firstName:'李',lastName:'白'}
]
const fullName = personNameList.map(item => {
  return item.firstName +'-'+ item.lastName
})
console.log('fullName---',fullName)

// 举例4
const todoList = [
  {name:'胡歌', done:false},
  {name:'杜甫', done:true},
  {name:'白居易', done:true},
  {name:'苏轼', done:true},
  {name:'李白', done:false}
]
const newTodoList = todoList.map(item => {
  return {...item,done:true}
})
console.log('newTodoList---',newTodoList)
