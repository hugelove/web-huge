// 父类
class People{
  constructor(name){
    this.name = name;
  }
  eat(){
    console.log(`${this.name} eat something`)
  }
}

// 子类 
// 子类继承People
class Student extends People{
  constructor(name,number){
    super(name);
    this.number = number;
  }
  sayHi(){
    console.log(`姓名:${this.name} 学号:${this.number}`)
  }
}
 
class Teacher extends People{
  constructor(name,major){
    super(name);
    this.major = major
  }
  teach(){
    console.log(`${this.name} 教我们 ${this.major}`);
  }
}

// 学生的实例
const huge = new Student('胡歌',100)
console.log(huge.name);
console.log(huge.number);
huge.sayHi();
huge.eat();

// 老师的实例
const hugelaoshi = new Teacher('胡歌老师','语文');
console.log(hugelaoshi.name);
console.log(hugelaoshi.major);
hugelaoshi.teach();
hugelaoshi.eat();

/***
 * 类型判断 --- instanceof
 * huge instanceof Student  // true
 * huge instanceof People  // true
 * huge instanceof Object // true
 * 
 * [] instanceof Array //true
 * [] instanceof Object //true
 * 
 * {} instanceof Object //true
 * **/