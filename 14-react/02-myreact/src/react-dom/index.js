// 模拟react-dom

//模拟react 定义render方法
/**
 * 
 * @param {传入虚拟dom} vdom 
 * @param {挂载虚拟dom的容器} container
 */
function render(vdom,container){
    if(vdom == '') return
    if(typeof vdom  == 'string'){
        return 
    }
}
const ReactDom = {
    render
}

export default ReactDom