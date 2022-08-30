/************************************************************
 * 设计模式：一种编程思想，我们会基于一些代码把思想实现出来；每一种设计模式都是解决了一类问题，而且问题偏向于“更好的去管理代码”
 * 
 * ### 发布订阅模式 subscribe & publish 
 * 思路一：全局只有一个自定义事件池，基于自定义事件名称来区分要执行的方法
 * 思路二：基于面向对象管理，每一次new执行都单独创建一个自定义事件池，实例可以调用：on/off/emit 
 * class Sub{....}
 * let s1 = new Sub();
 * s1.on();
 * s1.emit();
 * 
 * let s2 = new Sub();
 * s2.on();
 * s2.emit();
 * **/ 

const $sub = (function(){
  // 自定义事件池
  let listeners = {}; //{AAA:[fn1,....]}

  // 向事件池中加入方法
  const on = function on(name,func){
    let arr = listeners[name]; // 传入的自定义事件
    if(!arr){
      //事件池中从来没有这个自定义事件：加一个即可
      listeners[name] = [func];
      return;
    }
    // 之前已经存在这个自定义事件，则把方法存储到数组中：去重处理
    if(arr.indexOf(func) > -1) return; //如果存在则返回
    arr.push(func); 
  };

  // 从事件池中移除方法
  const off = function off(name,func){
     let arr = listeners[name];
     let index;
     if(!arr) return;
     index = arr.indexOf(func);
     if(index === -1) return;
    //  arr.splice(index,1); 引起数组塌陷
    // 解决数组塌陷问题
    arr[index] = null;
  };

  // 通知事件池中的方法执行
  const emit = function emit(name,...params){
    let arr = listeners[name];
    if(!arr) return;

    // forEach不灵活 函数式编程改为命名式编程
    // arr.forEach(item => {
    //   if(typeof item === 'function'){
    //     item(...params);
    //     return;
    //   }
    // })

    for(let i = 0; i < arr.length; i++){
      let item = arr[i];
      if(typeof item !== 'function'){
        // return; 如果循环当中有return整个循环就结束了，所以改为continue
        //如果当前不是函数，则把它移除掉
        arr.splice(i,1);
        i--; //++ 再 -- 不加不减
        continue;
      }
      item(...params);
    }
  };

  return {
    on,
    off,
    emit,
  }
})();

/*---------------------------------------------------------*/ 
// 执行
const fn1 = (x,y) => {
  console.log('fn1',x+y);
};
$sub.on('@A',fn1);

const fn2 = (x,y) => {
  console.log('fn2',x+y);

  //
  $sub.off('@A',fn1);
  $sub.off('@A',fn2);
};
$sub.on('@A',fn2);

const fn3 = () => console.log('fn3');
$sub.on('@A',fn3);

const fn4 = () => console.log('fn4');
$sub.on('@A',fn4);

const fn5 = () => console.log('fn5');
$sub.on('@A',fn5);


document.body.onclick = function(){
  // fn1(10,20);
  // fn2(10,20);
  // fn3();
  // fn4();
  // fn5();

  //通过$sub.on加入全局事件池中
  $sub.emit('@A',10,20);
}

/***
 * vue 中组件通信方法
 * 1，$on/$emit
 * 2,EventBus
 * 核心原理就是发布订阅模式
 * ***/ 


