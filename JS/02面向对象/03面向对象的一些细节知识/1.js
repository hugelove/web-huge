/***
 * Object.prototype.hasOwnProperty:用来检测是否为私有属性
 * 语法：[对象].hasOwnProperty([属性])
 * 检测[属性]是否为[对象]的私有属性，是返回true,不是返回false;
 * 只看私有中有没有（和公有是否存在没关系）;
 * 私有属性还是公有属性是相对概念。
 * ***/

/***
 * in 操作符
 * 语法：[属性] in [对象]
 * 检测[属性]是否属于这个[对象]，不论公有还是私有，只要能访问到这个* 属性,则结果就是true
 * ***/

let arr = [10,20];

// push
/***
 * arr 首先找自己私有属性，发现没有push方法
 * 则默认基于__proto__去Array.prototype上找；
 * 所以它是找到Array.prototype.push方法，把其执行
 * [this->arr 实参-->30];
 * 而push方法执行的作用，就是给arr(this)的末尾追加新的内容30，
 * 并且让数组长度累加1，返回新增后数组长度。
 * **/
arr.push(30);

console.log(arr.hasOwnProperty('push'))// false
console.log(Array.prototype.hasOwnProperty('push'));// true
console.log('push' in arr); // true



 