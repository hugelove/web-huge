// 触发更新视图
function updateView(){
  console.log('视图更新-----')
}

// 重新定义数组原型
const oldArrayProperty = Array.prototype;
// 创建新对象，原型指向oldArrayProperty,再扩展新的方法不会影响原型
const arrProto = Object.create(oldArrayProperty);
['push','pop','shift','unshift','splice'].forEach(methodName => {
  arrProto[methodName] = function(){
    updateView() // 触发视图的更新
    oldArrayProperty[methodName].call(this,...arguments)
  }
})


// 重新定义属性，监听起来
function defineReactive(target, key, value){
  // 深度监听
  observer(value);

  // 核心API
  Object.defineProperty(target, key,{
    get(){
      return value
    },
    set(newValue){
      if(newValue !== value){
        // 深度监听
        observer(newValue)

        // 设置新值
        // 注意，value一直在闭包中，此处设置完之后，再get时也是可以获取到
        value = newValue

        // 触发更新视图
        updateView();
      }
    }
  })
}

// 监听对象属性
function observer(target){
    if(typeof target !== 'object' || target === null){
      // 不是对象或数组
      return target
    }

    // 污染全局的Array原型(不能这样写)
    // Array.prototype.push = function(){
    //   updateView()
    //   ...
    // }

    if(Array.isArray(target)){
      target.__proto__ = arrProto
    }

    // 重新定义各个属性（for in 也可以遍历数组）
    for(let key in target){
      defineReactive(target,key,target[key]);
    }
}

// 准备数据
const data = {
  name: '胡歌',
  age: 18,
  info:{
    address: '上海'
  },
  nums: [10,20,30]
}

// 
observer(data);

// 测试数据
data.name = '刘超华';
data.age = 19;
console.log('age',data.age);
data.info.address = '深圳' //深度监听
// data.say = 'hhaha' //新增属性，监听不到，所以有Vue.set
// delete data.name //删除属性，监听不到  所以有Vue.delete
data.nums.push(99)

