// src/store/index.js
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "@src/store/modules/user";
import viewReducer from "@src/store/modules/view"
// 위에서 생성한 module을 import해서 combineReducers를 통해서 합쳐줍니다.
export default combineReducers({ userReducer,viewReducer });