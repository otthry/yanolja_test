//로그인 기능만 정의하는 덕스패턴으로 정의
const LOGIN_SUCCESS = "LOGIN_SUCCESS"; 
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"; 
const UPDATE_PROFILE = "UPDATE_PROFILE";// action creators를 정의합니다.
export const loginSuccess = (result: any) => {
  return { type: LOGIN_SUCCESS, result };
};
export const logoutSuccess = () => {
  return { type: LOGOUT_SUCCESS };
};
export const updateProfile = (result: any) => {
  return { type: UPDATE_PROFILE, result };
};
// reducer를 선언합니다.
// 초기 State 값을 선언합니다.
const defaultState = {
  isLoggedIn: false,
  user: {},
};
export default function userReducer(state = defaultState, action: any) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        user: action.result,
      };
    case LOGOUT_SUCCESS:
      return {
        isLoggedIn: false,
        user: {},
      };
    case UPDATE_PROFILE:
      return {
        isLoggedIn: true,
        user: action.result,
      };
    default:
      return state;
  }
}