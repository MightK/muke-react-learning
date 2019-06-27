import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,HANDLE_DELETE_ITEM} from "./actionTypes";
const defaultState={
 inputValue:"iverson",
 list:[ 
 'Racing car sprays burning fuel into crowd.',
 'Japanese princess to wed commoner.',
 'Australian walks 100km after outback crash.',
 'Man charged over missing wedding girl.',
 'Los Angeles battles huge wildfires.',]
}
export default (state=defaultState,action)=>{
    if(action.type===CHANGE_INPUT_VALUE){
        const newState=JSON.parse(JSON.stringify(state)); // 1* 深拷贝对象 
        newState.inputValue=action.value;
        console.log(action);
        return newState;
    }
    if(action.type===ADD_TODO_ITEM){
        const newState=JSON.parse(JSON.stringify(state));
         newState.list.push(newState.inputValue);
         newState.inputValue="";
         console.log(newState);
         return newState;
    }
    if(action.type===HANDLE_DELETE_ITEM){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    } 
    console.log(action);
    return state;
}