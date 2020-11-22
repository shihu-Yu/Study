import {createDom} from '../react-dom/index'
import {diff} from '../react-dom/diff'
import { patch} from '../react-dom/patch'
import { enqueue } from './queue'
// 生成虚拟的DOM类
export class Element{
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
    update(){
        // 生成新的虚拟Dom节点
        const newVdom = this.render()
        // 取出原有的虚拟Dom 节点
         const oldVdom = this.vdom
        //  使用diff算法比较新旧dom 找出需要更新的部分
        const pathes = diff(oldVdom,newVdom)
        // 根据区别更新当前的DOM节点
        patch(this.dom,pathes)
        this.vdom = newVdom
        // 执行更新完成的生命周期函数
        typeof this.componentDidUpdate == 'function' && this.componentDidUpdate(this.state,this.props)
    }
    setState(updateState){
        /*
        // 原始更新
        // 首先生成新的state
        Object.assign(this.state,updateState)
        // 然后生成新的虚拟DOM
        const newVdom = this.render()
        // 生成新的Dom
        const newDom = createDom(newVdom)
        // 用新的DOM来替换旧的Dom
        if(this.dom.parentNode){
            this.dom.parentNode.replaceChild(newDom,this.dom)
            this.dom = newDom
        }
        */
       /*
        //  使用diff算法 只更新变化的DOM节点
        // 生成新的state
        Object.assign(this.state,updateState)
        // 生成新的虚拟Dom节点
        const newVdom = this.render()
        // 取出原有的虚拟Dom 节点
         const oldVdom = this.vdom
        //  使用diff算法比较新旧dom 找出需要更新的部分
        const pathes = diff(oldVdom,newVdom)
        // 根据区别更新当前的DOM节点
        patch(this.dom,pathes)
        this.vdom = newVdom
        // 执行更新完成的生命周期函数
        typeof this.componentDidUpdate == 'function' && this.componentDidUpdate(this.state,this.props)
        */

        // 实现异步更新
        enqueue(updateState,this)
    }
}
const React = {
    createElement,
    Component
}
export default React
export {Component}