//引入react
import React from './react'
import ReactDom from './react-dom'
const elem = (
    <div className="App" style="color:green" onClick={()=>{elert(123)}}>
        <ul className="List">
            <li>item</li>
        </ul>
    </div>
)
console.log(elem)
ReactDom.render(elem,document.getElementById('root'))
