// 枚举（Enum）类型是把取值限定在一定范围内的类型。
// enum direction{//direction表示枚举属性的名称
//     Up,
//     Down,
//     Left,
//     Right
// }

// console.log(direction)
// 枚举成员默认赋值是从 0 开始递增的数字


// 也可以手动赋值 为枚举成员手动赋值
enum direction{//direction表示枚举属性的名称
    Up=1,
    Down=2,
    Left=3,
    Right=4
}

console.log(direction)