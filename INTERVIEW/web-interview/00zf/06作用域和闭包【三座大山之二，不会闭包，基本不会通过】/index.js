// ********************* 函数作为返回值 *********************
// function create(){
//   let a = 100;
//   return function(){
//     console.log(a)
//   }
// }
// let fn = create();
// let a = 200;
// fn();

// *********************函数作为参数*********************************
// function print(fn){
//   let a = 200;
//   fn();
// }
// let a = 100;
// function fn(){
//   console.log(a);
// }
// print(fn);

/**
 * ***[重点]***
 * 所有自由变量的查找，是在函数定义的地方，向上级作用域查找，不是在执行的地方。
 * ***/ 


// *********************@@@@@@@@@@@@@@@@*********************************




// *********************this*********************************
/**
 * this取什么样的值是在函数执行的时候确定的，不是在函数定义的时候确定的。
 * call() 直接调用就执行 
 * bind 返回一个新的函数 需要重新执行这个函数
 * **/ 

// function fn1(){
//   console.log(this)
// }
// fn1() //window
// fn1.call({x:100}) // {x:100}
// const fn2 = fn1.bind({x:200})
// fn2(); // {x:200}

/********************************************/
// const huge = {
//   name: '胡歌',
//   sayHi(){
//     // this 即当前对象
//     console.log(this);
//   },
//   wait(){
//     setTimeout(function(){
//       // this --> window
//       console.log(this);
//     })
//   }
// }
// huge.sayHi();
// huge.wait();


// const huge1 = {
//   name: '胡歌',
//   sayHi(){
//     // this 即当前对象
//     console.log(this);
//   },
//   waitAgain(){
//     /**
//      * 箭头函数自己没有this，取的是上级作用域的this
//      * ***/
//     setTimeout(() => {
//       // this 即当前对象
//       console.log(this);
//     })
//   }
// }
// huge1.sayHi();
// huge1.waitAgain();

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// class
class People{
  constructor(name){
    this.name = name; 
    this.age = 20;
  }
  sayHi(){
    console.log(this)
  }
}

const huge = new People('胡歌');
huge.sayHi(); //huge 