import React  from 'react'
import { Row, Col ,Input,List ,Button} from 'antd';
// UI 组件
const UI = (props)=>{
    const {name} = props
    return(
            <div className="Nav">
               <h1>{name}</h1> 
            </div>
    )
}


export default UI