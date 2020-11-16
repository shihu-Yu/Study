// es6 模块化

//写法一 定义的同时导出
// export const a = 1

//写法二 先定义 再导出
// const a = 1
// export {a}

// 写法三 导出时使用as重命名变量名
// const a = 1
// export {a as b}

//写法四 导出后在引入时 在使用as关键字来重命名变量名
// const a = 1
// export {a}

//写法五 定义导出默认输出 一个模块中只能有一个默认输出export default命令只能使用一次
// export default 1

// export default const a = 1  //这种写法是错误的 因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句
const a = 1
export default a 