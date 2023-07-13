// 중앙 데이터 관리소를 설정하는 부분

import errorList from "../modules/ErrorsSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { errorList },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
