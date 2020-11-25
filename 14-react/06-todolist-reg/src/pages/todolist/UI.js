import React  from 'react'
import { Row, Col ,Input,List ,Button} from 'antd';
import './index.css'
// UI 组件
const UI = (props)=>{
    const {task,list,handleChange,handleSubmit,handleDel} = props
    return(
            <div className="App">
                <Row>
                    <Col span={18}><Input onChange={handleChange} value={task} /></Col>
                    <Col span={6}><Button type="primary" onClick={handleSubmit}>提交</Button></Col>
                </Row>
                <List 
                    style={{marginTop:'30px'}}
                    bordered
                    dataSource={list}
                    renderItem={item=>(
                        <List.Item onClick={handleDel.bind(this,item.id)}>
                            {item.task}
                        </List.Item>
                    )}
                />
            </div>
    )
}


export default AppUI