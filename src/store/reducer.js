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
    if(action.type==="change_input_value"){
        const newState=JSON.parse(JSON.stringify(state)); // 1* 深拷贝对象 
        newState.inputValue=action.value;
        console.log(action);
        return newState;
    }
    if(action.type==="add_todo_item"){
        const newState=JSON.parse(JSON.stringify(state));
         newState.list.push(newState.inputValue);
         newState.inputValue="";
         console.log(newState);
         return newState;
    }
       
    console.log(action);
    return state;
}