// 模拟react-dom

/**
 * 设置属性的方法
 * @param {html标签DOM节点} dom 
 * @param {属性名} key 
 * @param {属性值} attrs 
 */
function setProperty(dom,key,attrs){

}


//模拟react 定义render方法
/**
 * 
 * @param {传入虚拟dom} vdom 
 * @param {挂载虚拟dom的容器} container
 */
function render(vdom,container){
    // 当传入的vdom为空时直接返回
    if(vdom == '') return
    // 当vdom 为字符串时
    if(typeof vdom  == 'string'){
        const dom = document.createTextNode(vdom)
        return container.appendChild(dom)
    }
    // 当传入的vdom为数字时
    if(typeof vdom == 'number'){
        const dom = document.createTextNode(vdom)
        return container.appendChild(dom)
    }
    // 当传入的vdom为属性时
    const dom = document.createElement( vdom.tag )
    if ( vdom.props ) {
        // 遍历属性
        for(let key in vdom.props){
            const attrs = vdom.props[key]
            // 设置属性
           setProperty(dom,key,attrs)
        }
    }
}
const ReactDom = {
    render
}

export default ReactDom