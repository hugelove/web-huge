//计算数组元素相加后的总和
let numbers = [1,2,3,4,5,6,7,8,9,10]
//for循环实现累加
let sum = 0
for(let i=0;i<numbers.length;i++){
  sum+=numbers[i]
}
console.log('for-----',sum)

/***
 * reduce 对数组进行条件统计，筛选最值
 * reduce实现累加
 * 语法：
 * 数组变量名(numbers).reduce((sum,val) => {
 *      //向sum变量上累加值
 *      //一定要return，返回的值作为下一次循环的初始值
 * })
 * ***/
let resultOne = numbers.reduce((sum,val) => {
  return sum +=val
},0)
console.log('reduce----',resultOne)

/***
 * reduce拼接字符串
 * **/
let nameLists = ['胡歌','白居易','刘禹锡','李白','杜甫','孟浩然']
let resultName = nameLists.reduce((str,item) => {
  return str+=item
},'')
console.log('reduce---resultName-字符串拼接:',resultName)

/***
 * reduce求出对象中年龄的和
 * **/ 
let personLists = [
  { name:'胡歌', age:10 },
  { name:'白居易', age:12 },
  { name:'杜甫', age:11 },
  { name:'胡歌1', age:18 },
]
let ageSum = personLists.reduce((ageSum,item) => {
  return ageSum+=item.age
},0)
console.log('ageSum----',ageSum)
/**
 * reduce求出对象中大于10岁的和
 * ***/
let age10 = personLists.reduce((ageSum10,item) => {
  if(item.age > 10){
    ageSum10+=item.age
  }
  return ageSum10
},0)
console.log('age大于10的年龄和',age10)





