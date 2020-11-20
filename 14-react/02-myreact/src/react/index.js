const React = {
    createElement
}
// 模拟react中的createElement方法
function createElement(tag,props,...children){
   return {
       tag,
       props,
       children
   }
}
export default React