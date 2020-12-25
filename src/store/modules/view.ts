//로그인 기능만 정의하는 덕스패턴으로 정의
const OPEN_MENU = "OPEN_MENU"; 
const CLOSE_MENU = "CLOSE_MENU"; 
export const openMenuDrawer = () => {
  return { type: OPEN_MENU };
};
export const closeMenuDrawer = () => {
  return { type: CLOSE_MENU };
};
// reducer를 선언합니다.
// 초기 State 값을 선언합니다.
const defaultState = {
  isOpenDrawer: false,
};
export default function viewReducer(state = defaultState, action: any) {
  switch (action.type) {
    case OPEN_MENU:
      return {
        isOpenDrawer: true
      };
    case CLOSE_MENU:
      return {
        isOpenDrawer: false,
      };
    default:
      return state;
  }
}