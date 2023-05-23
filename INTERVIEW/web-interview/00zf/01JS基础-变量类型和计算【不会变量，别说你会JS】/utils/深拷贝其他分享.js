// 深拷贝函数
function deepClone(obj) {
  // 1 判断是否是非应用类型或者null
  if (typeof obj !== 'object' || obj == null) return obj
  // 2 创建一个容器
  let cloneObj = new obj.constructor()
  // 3 拿到对象的keys，给容器赋值
  Object.keys(obj).forEach(v => cloneObj[v] = deepClone(obj[v]))
  // 4 返回容器
  return cloneObj
}