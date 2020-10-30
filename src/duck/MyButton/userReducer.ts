//Reducerが受け付けるstateの型
// export interface CountState {}

import { Action } from './action';

//初期値
export const initalState: any[] = [];

//Action型の構造(エイリアス)

//Reducerオブジェクト本体
export const userReducer = (state = initalState, action: Action<any[]>) => {
  //ここにswitch文でaction分岐
  let newState = state;
  const users = action.payload || [];
  switch (action.type) {
    case 'GET':
      newState = [...state, ...users];
      return newState;
    default:
      //既存のstateを返す
      return state;
  }
};
