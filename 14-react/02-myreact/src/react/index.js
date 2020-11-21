
// 模拟react中的createElement方法
function createElement(tag,props,...children){
    // 这里返回的要是一个对象
   return {
       tag,
       props,
       children
   }
}
class Component{
    constructor(props){
        this.props = props
        this.state = {}
    }
}
const React = {
    createElement,
    Component
}
export default React
export {Component}