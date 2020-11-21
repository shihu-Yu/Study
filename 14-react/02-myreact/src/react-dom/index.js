// 模拟react-dom



function createDom(vdom){
    // 当传入的vdom为空时直接返回
    if(vdom == undefined) return
   
    // 当vdom 为数字时 转换为字符串
    if(typeof vdom  == 'number')
    vdom = String(vdom)
    // 当传入的vdom为字符串时，返回一个文本节点
    if(typeof vdom == 'string'){
        return  document.createTextNode(vdom)  
    }

    // 如果传入的是一个虚拟dom
    else if ( typeof vdom.tag == 'string' ) {
        // 当传入的vdom为属性时
        const dom = document.createElement( vdom.tag )
        // 遍历属性
        for(let key in vdom.props){
            // 设置属性
           setProperty(dom,key,vdom.props[key])
        }
        // 处理子节点
        if(vdom.children && vdom.children.length>0){
            vdom.children.forEach(child=>render(child,dom))
        }
        return dom
    }

    // 当传入的为组件时
   if(typeof vdom.tag == "function"){
        // 生成组件的实例
        const Instance = createComponentInstance(vdom.tag,vdom.props)

        
   }
}

/**
 * 该函数用于生成组件的实例对象
 * @param {*} comp 
 * @param {*} props 
 */
function createComponentInstance(comp,props){

}   
/**
 * 设置属性的函数
 * @param {html标签DOM节点} dom 
 * @param {属性名} key 
 * @param {属性值} value
 */
function setProperty(dom,key,value){
    key.startsWith('on') && (key = key.toLowerCase())
    // 当属性为css时
    if(key == 'style' && value){
        // 当属性值以字符串传入时
        if(typeof value == "string"){
            dom.style.cssText = value
        }
        // 当属性值 value 以对象传入时
        else if(typeof value == "object"){
            // 遍历对象
            for(let attr in value){
                dom.style[attr] = value[attr]
            }
        }
    }
    // 当属性为普通属性时
    else{
        if(value){
            dom[key] = value
        }else{
            dom.removeAttribute(key)
        }
    }
}

//模拟react 定义render方法
/**
 * 
 * @param {传入虚拟dom} vdom 
 * @param {挂载虚拟dom的容器} container
 */
function render(vdom,container){
    console.log(vdom)
    const dom = createDom(vdom)
    container.appendChild(dom)
}
const ReactDom = {
    render
}

export default ReactDom