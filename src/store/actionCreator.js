import  {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,HANDLE_DELETE_ITEM,GET_INIT_STATE} from "./actionTypes";
import axios from "axios";
export const handleInputChangeAction=(value)=>{
    return{
        type:CHANGE_INPUT_VALUE,
        value
    }
}
export const handleBtnClickAction=()=>{
    return{
        type:ADD_TODO_ITEM
    }
}
export const handleDeleteItemAction=(index)=>{
    return{
        type:HANDLE_DELETE_ITEM,
        index
    }
}
export const getInitStateAction=(data)=>{
    return{
        type:GET_INIT_STATE,
        data
    }
}
export const getDataAction=()=>{
    return (dispatch)=>{

    }
}

