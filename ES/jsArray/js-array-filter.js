//举例1：返回数组中是偶数的元素
let arrayNums = [2,4,5,6,7,89,9,86]
let newArrayNums = arrayNums.filter(item => item % 2 === 0)
// console.log(newArrayNums) // [2, 4, 6, 86]


//举例2：过滤掉数组中大于10的数字
let newArrayNums10 = arrayNums.filter(item => item > 10)
// console.log(newArrayNums10)

//举例3：实现数组去重
let uniqueArrayList = [0,1,2,3,2,4,5,3,1,6,7,8,10,2,3,4,6,7,8,9,10]
let newUniqueArrayList = uniqueArrayList.filter((item,index,self) =>{
  return self.indexOf(item) === index
})
// console.log(newUniqueArrayList)
//举例3进阶：实现去重的实际应用
let personLists = [
  {id:1, name:'胡歌', age:18, info:'上海市'},
  {id:2, name:'白居易', age:15, info:'洛阳市'},
  {id:3, name:'苏轼', age:22, info:'眉山人'},
  {id:4, name:'李白', age:18, info:'有钱人'},
  {id:5, name:'杜甫', age:23, info:'巩义人'},
  {id:6, name:'柳宗元', age:19, info:'石潭'},
  {id:7, name:'苏味道', age:22, info:'四川'},
  {id:101, name:'杜审言', age:21, info:'河南'},
  {id:1, name:'胡歌', age:18, info:'上海市'},
  {id:2, name:'白居易', age:18, info:'洛阳市'},
  {id:101, name:'杜审言', age:18, info:'河南'},
]
function handleArrayUnique(arrLists){
 let tmpArryUnique = []
 /**
  * item: 当前元素的值 
  * index: 当前元素的索引值
  * self: 传入的数组对象
  * ***/
 const newArrLists =  arrLists.filter((item,index,self) => {
    /**
     * 创建一个临时存储的数组放每个对象的唯一标识id
     * 这个地方复杂问题简单化了，直接找出对象的唯一识别id组合成一个新的数组，
     * 再从这个新数组里面比较去重
     * **/
    tmpArryUnique.push(item.id)
    return tmpArryUnique.indexOf(item.id) === index
  })
  return newArrLists
}
// console.log(handleArrayUnique(personLists))

//举例4：数组中的空字符去除
let arrEmptyList = ['nihao','hello','hi','','haha','仰天大笑出门去','  ','冬天也可以吃雪糕','雪糕别吃那么多 ','听妈妈的话 ']
let newArrEmptyList = arrEmptyList.filter((item,index,self) => {
  return item && item.trim()
})
console.log(newArrEmptyList)