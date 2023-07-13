// 중앙 데이터 관리소를 설정하는 부분
import { createStore } from "redux";
import { combineReducers } from "redux";
import errorList from "../modules/ErrorsSlice";
const rootReducer = combineReducers({
  errorList,
});
const store = createStore(rootReducer);

export default store;
