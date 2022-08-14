/***
 * 鸭子类型：
 * 所代表的是那些“类XXXX”[例如：类数组，类Promise...]
 * 类数组的结构和数组非常相似，所以导致了：操作数组的一些代码和方案对类数组也是使用的[例如：循环...]
 * 但是因为类数组并不是Array的实例，所以不能直接调用Array.prototype上的方法
 * 需求：让类数组也可以使用数组方法【鸭子类型含义】
 *  - 1,把类数组转换为数组
 *  - 2,修改原型链指向：让 类数组.__proto__ === Array.prototype 
 *                   => Object.setPrototypeOf([obj],[prototype])
 *  - 3,想借用数组的哪个方法，就把哪个方法设置为类数组的私有属性
 *  - 4,把借用的方法执行，让方法中的this指向要处理的类数组，这样也是可以的。
 *     
 *  A实例借用B实例的方法：前提是A和B具备相类似的结果，操作B的代码和方案也是适用于A；
 *  后期只需要想办法让借用的方法执行，让方法中的this指向A，这样就相当于基于这个方法操作A..
 * ***/
// let arr = [10,20,30];
// let likeArr = {
//   0: 10,
//   1: 20,
//   2: 30,
//   length: 3,
//   forEach: Array.prototype.forEach //（对应第3条）
// };

/**********************************************************************/
// arr.forEach((item,index) => {
//   console.log(item,index)
// })
/**********************************************************************/
// Object.setPrototypeOf(likeArr,Array.prototype); //(对应第2条)
// likeArr.forEach((item,index) => {
//   console.log(item,index)
// })
/**********************************************************************/
// arr.forEach();//forEach中this:arr forEach内部的this是谁，它就把谁进行迭代循环
// likeArr.forEach((item,index) => {
//   console.log(item,index)
// })
/**********************************************************************/
// Array.prototype.forEach.call(likeArr,(item,index) => {
//   console.log(item,index);
// });
// [].forEach.call(likeArr,(item,index) => {
//   console.log(item,index);
// })
/**********************************************************************/

// 重写数组的push方法
Array.prototype.push = function push(value){
  // this --> arr
  this[this.length] = value;
  this.length++;
  return this.length;
}

/*****
 * 题目解析
 * this --> obj
 * obj[2] = 1; obj.length++
 * obj[3] = 2;obj.length++
 * 
 * let obj = {
 *  2: 1,
 *  3: 2,
 *  length: 4
 * }
 * 
 * **/ 
let obj = {
  2: 3, //1
  3: 4, //2
  length: 2, //3 //4
  push: Array.prototype.push
};
obj.push(1);
obj.push(2);
console.log(obj);