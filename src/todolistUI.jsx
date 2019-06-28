import React, { Component } from 'react';
import { Input,Button,List } from 'antd';
class TodoListUi extends Component {
    render() { 
        return ( 
            <div style={{marginTop:"10px"}}>
                <Input 
                    placeholder={this.props.inputValue} 
                    style={{width:"300px"}}
                    value={this.props.inputValue}
                    onChange={this.props.handleInputChange}
                />
                <Button 
                    type="primary" 
                    style={{marginLeft:"10px"}}
                    onClick={this.props.handleBtnClick}
                >提 交
                </Button>  
                <List
                style={{marginTop:"10px",width:"300px"}}
                bordered
                dataSource={this.props.list}
                renderItem={(item ,index)=> (
                    <List.Item onClick={()=>{this.props.handleDeleteItem(index)}}>
                       {item}
                    </List.Item>
                )}
                />
            </div>    
         );
    }
}
 
export default TodoListUi;