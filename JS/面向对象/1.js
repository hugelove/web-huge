/***
 * JS中有很多内置类
 * 1，每一种数据类型值都有自己所属的内置类（专业叫法：构造函数）
 * 大类：Object
 * 小类：Number String Boolean ...
 * ***/ 

/***
 * 自定义构造函数（类）
 * new
 * **/
function Fn(x,y){
  let sum = 10;
  this.total = x + y;
  this.say = function(){
    console.log(`我计算的和是：${this.total}`);
  }
} 

let res = Fn(10,20);//