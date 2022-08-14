JS 有很多内置类：

1，每一种数据类型值都有自己所属的内置类（专业叫法：构造函数）

    大类：Object

    小类：Number,String,Boolean,Symbol,BigInt,Function,Array,RegExp,Date,Set,Map....

2，每一个DOM元素对象是一个实例，也有自己所属的内置类

    body  --> HTMLBodyElement --> HTMLElement --> Element --> Node --> EventTarget --> Object

    div --> HTMLDivElement -->

    XMLElement

    Text

    Document


3, HTMLCollection/NodeList

....


学习面向对象作用：

    1，更好的学习JS

    2，封装插件，组件，框架

    ....

自定义构造函数（类）

    创建一个函数，执行的时候，把其“new”执行，则当前函数被称为“自定义构造函数（类）”；

    执行的返回结果是当前类的一个【实例】

  “new”多次就会创造多个不同的实例对象【实例对象的独立性】；

    基于this.xxx = xxx 是给实例对象设置“私有属性方法”
