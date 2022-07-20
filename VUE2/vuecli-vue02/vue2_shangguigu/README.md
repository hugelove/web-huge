- https://www.yuque.com/cessstudy/kak11d

- 查看隐藏文件 vue inspect > output.js

#### vue.config.js配置文件

#### ref属性

1，被用来给元素或子组件注册引用信息（id的替代者）

2，应用在html标签上获取的真实DOM元素，应用在组件标签上是组件实例对象（vc）

3,使用方法：

   打标识：`<h1 ref="xxx"> ....</h1> 或者 <school ref="xxxx"></shool>`

  获取

#### 关于vuex的说明（2022年）

> 在2022年2月7日，vue3成为了默认版本，npm i vue，安装的直接就是vue3了
>
> vue3成为默认版本的同时，vuex也更新到了4版本
>
> npm i vuex，安装的是vuex4
>
> vuex4版本，只能在vue3使用
>
> vue2中，要用vuex3版本   npm i vuex@3
>
> vue3中，要用vuex4版本   npm i vuex@4

### vuex 笔记

> actions: 业务逻辑写在这里
>
> commit 对应 mutations，一般写方法名字是大写
>
> dispatch 对应 actions



###### 四个map方法的使用

+ 1, mapState方法：用于帮助我们映射state中的数据为计算属性

```javascript
computed:{
	//借助mapState生成计算属性，sum,school,subject(对象写法)
	...mapState({sum:'sum',school:'school',subject:'subject'}),

  // 借助mapState生成计算属性，sum，school,subject(数组写法)
  ...mapState(['sum','school','subject'])
}
```

+ 2,mapGetters方法：用于帮助我们映射getters中的数据计算属性
```javascript
computed: {
  //借助mapGetters生成计算属性，bigSum(对象写法)
  ...mapGetters({bigSum:'bigSum'}),

  //借助mapGetters生成计算属性，bigSum(数组写法)
  ...mapGetters(['bigSum'])
},
```

+ 3,mapActions方法：用于帮助我们生成与actions对话的方法，即：包含$store.dispatch(xxx)的函数
```javascript
methods:{
  //靠mapActions生成：incrementOdd,incrementWait(对象形式)
  ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
  //靠mapActions生成：incrementOdd,incrementWait(数组形式)
  ...mapActions(['jiaOdd','jiaWait'])
}
```

+ 4,mapMutations方法：用于帮助我们生成与mutations对话的方法，即包含$store.commit(xxx)的函数
```javascript
methods:{
  //靠mapMutations生成：increment,decrement（对象形式）
  ...mapMutations({increment:'JIA',decrement:'JIAN'}),
  //靠mapMutations生成：increment,decrement（数组形式）
  ...mapMutations(['JIA','JIAN']),
}
```


