import React, { Component } from 'react';
import store from "./store";
import {connect} from "react-redux";
import * as actions from "./store/actionCreator";
class App extends Component {
  constructor(props){
    super(props);
    this.state=store.getState();
  }

  render() { 
    const {inputValue,handelInput,additem,handleDelete,list}=this.props;
    return (
    <div>
        <input value={inputValue}
        onChange={handelInput}
        />
        <button onClick={additem}>提交</button>
        <ul>
            {list.map((item,index)=>{
              return <li onClick={()=>{handleDelete(index)}} key={index}>{item}</li>
            })}
        </ul>
    </div>);
  }
}
//连接到store的规则：
const mapStateToProps=(state)=>{
//把store内的数据映射到组件中去，变成组件的props
return{
  inputValue:state.inputValue,
  list:state.list
}
}
//把store的dispacth方法挂载到props上
const mapDispatchToProps=(dispatch)=>{
return {
  handelInput(e){
    const action=actions.handleInputChangeAction(e.target.value);
    dispatch(action);
  },
  additem(){
    console.log("omg")
    const action=actions.handleBtnClickAction();
    dispatch(action)
  },
  handleDelete(index){//传入参数
    const action=actions.handleDeleteItemAction(index);
    dispatch(action);
  }
}
}
 
export default connect(mapStateToProps,mapDispatchToProps)(App);