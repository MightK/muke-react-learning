import React, { Component } from 'react';
import "./style.css";
import 'antd/dist/antd.css';
import store from "./store";
import * as actions from "./store/actionCreator";
import TodoListUi from "./todolistUI";
import axios from "axios";
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
    //生命周期函数
    componentDidMount(){
        axios.get("./api/list.json").then((res)=>{
            const data=res.data;
            const action=actions.getInitStateAction(data);
            store.dispatch(action);
        })
    }
    //派发aciton的函数
    handleInputChange(e){
        const action=actions.handleInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    //派发增加todolist的action
    handleBtnClick(){
        const action=actions.handleBtnClickAction();
        store.dispatch(action);
    }
    //派发删除item项的action
    handleDeleteItem(index){
        const action=actions.handleDeleteItemAction();
        store.dispatch(action);
    }
    //监听store内数据变化的时候
    handleStoreChange(){
        this.setState(store.getState());
    }
    render() { 
        return (
            <TodoListUi 
            inputValue={this.state.inputValue}
            handleInputChange={this.handleInputChange}
            handleDeleteItem={this.handleDeleteItem}
            handleBtnClick={this.handleBtnClick}
            list={this.state.list}
            />
            )
    }
}
 
export default Todolist;