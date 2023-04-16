export const API_URL = "https://www.pre-onboarding-selection-task.shop/";

export const RES_MESSAGE = {
  SUCCESS(state) {
    return `${state}에 성공하였습니다.`;
  },
  FAIL(state) {
    return `${state}에 실패하였습니다. 다시 시도해주세요.`;
  },
};

export const SING_UP = "회원가입";
export const SIGN_IN = "로그인";
