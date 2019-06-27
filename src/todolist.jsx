import React, { Component } from 'react';
import "./style.css";
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Button } from 'antd';
import { List} from 'antd';
import store from "./store";
import  {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,HANDLE_DELETE_ITEM} from "./store/actionTypes";
class Todolist extends Component {
    constructor (props){
        super(props);
        this.state=store.getState();
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleDeleteItem=this.handleDeleteItem.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    //派发aciton的函数
    handleInputChange(e){
        const action={
            type:CHANGE_INPUT_VALUE,
            value:e.target.value
        }
        store.dispatch(action);
    }
    //派发增加todolist的action
    handleBtnClick(){
        const action={
            type:ADD_TODO_ITEM
        }
        store.dispatch(action)
    }
    //派发删除item项的action
    handleDeleteItem(index){
        const action={
            type:HANDLE_DELETE_ITEM,
            index //索引
        }
        store.dispatch(action);
    }
    //监听store内数据变化的时候
    handleStoreChange(){
        this.setState(store.getState());
    }
    render() { 
        return ( 
            <div style={{marginTop:"10px"}}>
                <Input 
                    placeholder={this.state.inputValue} 
                    style={{width:"300px"}}
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />
                <Button 
                    type="primary" 
                    style={{marginLeft:"10px"}}
                    onClick={this.handleBtnClick}
                >提 交
                </Button>  
                <List
                style={{marginTop:"10px",width:"300px"}}
                bordered
                dataSource={this.state.list}
                renderItem={(item ,index)=> (
                    <List.Item onClick={()=>{this.handleDeleteItem(index)}}>
                       {item}
                    </List.Item>
                )}
                />
            </div>    
         );
    }
}
 
export default Todolist;