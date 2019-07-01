import {takeEvery,put} from "redux-saga/effects";
import {GET_SAGA} from "./actionTypes";
import * as actions from "./actionCreator";
import axios from "axios";

function* getSaga(){
  console.log("NBA");
  try{
      const res= yield axios.get("./api/list.json");
      const action=actions.getInitStateAction(res.data);
      console.log(action);
      yield put(action);//派发action
  }catch(e){
      console.log("happyending")
  }
};
function* mySaga() {
    yield takeEvery(GET_SAGA, getSaga);
    //通过takeEvery去捕获每一次派发出来的action，如果这个actiontype等于GET_SAGA，那么就执行getSaga方法
  }
  export default mySaga;