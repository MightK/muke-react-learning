import  {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,HANDLE_DELETE_ITEM,GET_INIT_STATE,GET_SAGA,GET_OBSERVABLE} from "./actionTypes";
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
        axios.get("./api/list.json").then((res)=>{
            const data=res.data;
            const action=getInitStateAction(data);
            dispatch(action);
        })
    }
}
export const getSagaAction=()=>{
    return {
        type:GET_SAGA,
    }
}
export const getObesrvable=()=>{
    return {
        type:GET_OBSERVABLE,
    }
}

