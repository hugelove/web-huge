// 普通函数VS构造函数执行
function Fn(x,y){
  let sum = 10;
  this.total = x + y;
  this.say = function(){
    console.log(`我计算的和是：${this.total}`);
  }
}
//普通函数执行，Fn执行的返回值赋值给res
let res = Fn(10,20); 
//构造函数执行 把Fn当做一个类，f1是创造出来的一个实例
let f1 = new Fn(10,20);
let f2 = new Fn;
console.log(f1.sum);
console.log(f1.total);
console.log(f1.say === f2.say);