const React = {
    createElement
}
// 模拟react中的createElement方法
function createElement(Tag,props,...children){
   return {
       Tag,
       props,
       children
   }
}
export default React