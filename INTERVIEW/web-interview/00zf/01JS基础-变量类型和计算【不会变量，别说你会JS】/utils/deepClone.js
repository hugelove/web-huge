/**
 * 深拷贝
 * **/ 
const obj1 = {
  age: 20,
  name: 'huge',
  address: {
    city: 'beijing'
  },
  arr: ['a','b','c','d']
}

const obj2 = obj1
obj2.address.city = 'shanghai';
console.log(obj1.address.city); //shanghai (符合前面说的引用类型拷贝的规则就是浅拷贝)

/**
 * 接下来我们想实现的就是深拷贝，即obj2改变了city之后，obj1并没有改变。
 * ***/


/***
 * 深拷贝
 * obj:要拷贝的对象
 * 代码思路整理：
 * 1，要传入一个你要拷贝的东西，比如我们叫做obj
 * 2，我们要返回一个东西{}
 * 3，我们想下传入的obj必须是个对象或者数组，如果不是(当然如果是null也同样没有必要转换了)就没有必要进行这个deepClone函数的运行转换了。
 *    如何判断是不是，就想到前面的typeof
 *    前面讲过typeof结果是'object'的有：
 *      typeof {}
 *      typeof []
 *      typeof null
 * 4，初始化返回结果，先判断obj是数组还是对象
 * 5，遍历obj的key值[以obj1为例就是age,name,address,arr]
 * ***/
function deepClone(obj = {}){
  //obj不是对象和数组或者是null，没有必要实现深拷贝，直接返回就好了
  if(typeof obj !== 'object' || obj == null){
    return obj;
  }
  //初始化返回结果
  let result;
  if(obj instanceof Array){
    result = []
  }else{
    result = {}
  }

  for(let key in obj){
    // 保证key不是原型的属性
    if(obj.hasOwnProperty(key)){
      // 递归 是实现深拷贝的重点，重点，重点
      result[key] = deepClone(obj[key])
    }
  }

  //返回结果
  return result; 
}