```javascript
 // 创建10个a标签，点击时候弹出来对应序号
    let a;
    for(let i=0;i<10;i++){
      a = document.createElement('a');
      a.innerHTML = i + '<br>'
      a.addEventListener('click',function(e){
        e.preventDefault();
        alert(i);
      })
      document.body.appendChild(a);
    }
```

#### 作用域

```javascript
let a = 0;
function fn1(){
  let a1 = 100;
  function fn2(){
    let a2 = 200;
    function fn3(){
      let a3 = 300;
      return a + a1 + a2 + a3
    }
    fn3()
  }
  fn2()
}
fn1();
```

- 全局作用域


- 函数作用域


- 块级作用域（ES6新增）


- 自由变量

    一个变量在当前作用域没有定义，但是被使用了

    向上级作用域，一层一层一次寻找，直到找到为止

    如果到全局作用域都没有找到，则报错xx is not defined


- 闭包

    作用域应用的特殊情况，有两种表现：

    函数作为参数被传递

    函数作为返回值被返回

```javascript
// 函数作为返回值
function create(){
     let a = 100;
     return function(){
	console.log(a)
     }
}
let fn = create();
let a = 200;
fn();

```

/**

* ***[重点]***
* 所有自由变量的查找，是在函数定义的地方，向上级作用域查找，不是在执行的地方。
* ***/


this

    作为普通函数

    使用call apply  bind

    作为对象方法被调用

    在class方法中调用

    箭头函数

/***

【重点】

    this取什么样的值是在函数执行的时候确定的，不是在函数定义的时候确定的。

**/
