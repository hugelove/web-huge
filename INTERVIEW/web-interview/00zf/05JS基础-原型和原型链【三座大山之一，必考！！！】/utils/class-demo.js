// 类
class Student{
  constructor(name,number,age){
    this.name = name;
    this.number = number;
    this.age = age
  }
  sayHi(){
    console.log(`姓名 ${this.name}，学号 ${this.number}`)
  }
}
// 通过类声明对象（实例）
const huge = new Student('胡歌',100,12)
console.log(huge.name);
console.log(huge.number);
console.log(huge.age)
huge.sayHi();

