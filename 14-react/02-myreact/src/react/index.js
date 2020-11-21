// 生成虚拟的DOM类
class Element{
    constructor(tag,props,children){
        this.tag = tag
        this.props = props
        this.children = children
    }
}
// 模拟react中的createElement方法 生成虚拟DOM
function createElement(tag,props,...children){
    // 这里返回的要是一个对象
   return new Element(tag,props,children)
}

class Component{
    constructor(props){
        this.props = props
        this.state = {}
    }
    setState(updateState){
        // 原始更新
        // 首先生成新的state
        Object.assign(this.state,updateState)
        // 然后生成新的虚拟DOM
        const newVdom = this.render()
        // 生成新的Dom
        const newDom = createDom(newVdom)



        
    }
}
const React = {
    createElement,
    Component
}
export default React
export {Component}