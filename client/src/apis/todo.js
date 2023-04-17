import axios from "axios";
import { API_URL } from "../constants/const";
import { getToken } from "../utils/checkToken";

export const requestCreateTodo = async (newTodo) => {
  const access_token = getToken();
  const data = {
    todo: newTodo,
  };
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  };
  await axios
    .post(`${API_URL}todos`, data, config)
    .then((res) => {
      if (res.status == 201) {
        console.log("생성 완료");
      }
    })
    .catch((err) => {});
};

export const requestGetTodos = async (setHandler) => {
  const access_token = getToken();
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  await axios
    .get(`${API_URL}todos`, config)
    .then((res) => {
      if (res.status == 200) {
        setHandler(res.data);
      }
    })
    .catch((err) => {});
};

// 투두 업데이트

// 투두 삭제
