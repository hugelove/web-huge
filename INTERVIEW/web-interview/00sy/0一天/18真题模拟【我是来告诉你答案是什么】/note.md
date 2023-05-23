1，变量提升


2，typeof能判断哪些类型

undefined string  number  boolean   symbol

object(注意，typeof null === 'objct')

function  


3，列举强制类型转换和隐式类型转换

强制：parseInt parseFloat toString 等

隐式： if   逻辑运算 ==  +   拼接字符串


4，手写深度比较，模拟lodash isEqual


5,split() 和 join()的区别


6，数组pop push unshift shift 分别做什么


7, 数组API，有哪些是纯函数？



8，数组slice和splice的区别


9，[10,20,30].map(parseInt)


10,ajax请求get和post的区别

    - get 一般用于查询操作，post一般用户提交操作

    - get参数拼接在url上，post放在请求体内（数据体积可能很大）

    安全性： post 易于防止CSRF


11,函数call和apply区别

```javascript
fn.call(this,p1,p2,p3)
fn.apply(this,arguments)
```


12，事件委托（代理）是什么？


13，闭包是什么？有何特性？有何影响？

    作用域和自由变量

    闭包应用场景：

    作为参数被传入

    作为返回值被返回

    自由变量的查找，要在函数定义的地方（而非执行的地方）

    影响：变量会常住内存，得不到释放。闭包不要乱用。（不是一个bug）


14,如何阻止事件冒泡和默认行为

    event.stopPropagation()

    event.preventDefault()


15，查找，添加，删除，移动DOM


16,如何减少DOM操作

    缓存DOM查询结果

    多次DOM操作，合并到一次插入


17，解释jsonp的原理，为何它不是真正的ajax


new Object()和Object.create()区别


获取当前页面url参数

传统方式，查找location.search

新API，URLSearchParams
