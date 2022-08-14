/*******************************************************************
 * 数据类型检测
 * *****************************************************************/ 
const toType = function toType(){

}

/*******************************************************************
 * 检测是不是纯对象
 * *****************************************************************/  
const isPlainObject = function isPlainObject(){
  
}

/*******************************************************************
 * 
 * *****************************************************************/ 
const each = function each(){

}


/*******************************************************************
 * 数组/对象深浅拷贝&深浅合并
 * *****************************************************************/ 
const clone = function clone(obj,deep,exist){
  /**
   * 正则，日期，Error new其构造函数
   * ***/
  let ctor; //用来存储构造函数
  let type; //用来存储获得传进来的obj的类型
  let isArray; //判断是不是数组
  let isObject; //判断是不是对象
  let result; 

    /**
   * 判断obj
   * obj == null 包含obj为null，undefined两种情况
   * null == undefined ---> true
   * 如果obj是null或者undefined不需要做任何处理，直接返回obj即可
   * ****/ 
  if(obj == null) return obj;

  /**
   * 判断deep，如果deep=true是深拷贝
   *           如果deep = false 或者不传deep则是浅拷贝
   * ***/ 
  if(typeof deep!=="boolean") deep = false;

  /**
   * 其他值的处理
   * new ctor(obj) 原始值传过去创建一个新的实例
   * ***/
  ctor = obj.constructor;
  type = toType(obj); TODO: //参考上面封装好的方法
  isArray = Array.isArray(obj);
  isObject = isPlainObject(obj); //参考上面封装好的方法
  //如果是正则或者日期 
  if(/^(regexp|date)$/i.test(type)) return new ctor(obj);
  // 如果error取里面的message
  if(/^(error)$/i.test(type)) return new ctor(obj.message);
  // 函数不需要克隆，这里为了强迫症兼容,其实没有什么意义，刷下存在感
  if(typeof obj === 'function'){
    return function(...params){
      return obj.call(this,...params);
    }
  }

  // 这里再次进行判断，如果既不是数组也不是对象就直接返回，传什么就是什么
  if(!isArray && !isObject) return obj;
  /**
   * 如果是数组&纯对象
   * 这里需要注意：避免套娃操作出现死递归
   * ctor是构造函数。
   * 如果是纯粹对象  相当于创建一个空对象
   * 如果是数组ctor Array 相当于创建一个数组
   * **/
  /**
   * 避免套娃出现死递归 传一个exist参数 
   * 第一次调用并不会传exist这个值 是空集合
   * 只有深拷贝才会有这种情况
   * **/ 
  if(!Array.isArray(exist)) exist = []; //如果不是数组
  /**
   * 数组集合中是不是已经包含，如果已经存在不需要再递归
  */
  if(exist.indexOf(obj) > -1) return obj; 
  exist.push(obj); // 把obj存起来
  result = new ctor();
  // 循环有封装好的each方法 （参考上面封装好的each）
  each(obj,(value,key) => {
    /**
     * 如果deep是true 深拷贝
     * 深拷贝用递归的方式
     * **/ 
    if(deep){
      //再递归的时候把第三个参数传递过去了
      result[key] = clone(value,deep,exist);
      return;
    }
    // 浅拷贝
    result[key] = value;
  })
}