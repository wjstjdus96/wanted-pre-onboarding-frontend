import axios from "axios";
import { API_URL } from "../constants/const";
import { getToken } from "../utils/checkToken";

export const requestCreateTodo = async (data) => {
  const access_token = getToken();
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
        console.log("데이터 가져오기 완료");
        console.log(res.data);
      }
    })
    .catch((err) => {});
};

export const requestUpdateTodo = async (id, data) => {
  const access_token = getToken();
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  };
  await axios
    .put(`${API_URL}todos/${id}`, data, config)
    .then((res) => {
      if (res.status == 200) {
        console.log(`${id}업데이트 완료`);
      }
    })
    .catch((err) => {});
};

export const requestDeleteTodo = async (id) => {
  const access_token = getToken();
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  await axios
    .delete(`${API_URL}todos/${id}`, config)
    .then((res) => {
      if (res.status == 204) {
        console.log("삭제 완료");
      }
    })
    .catch((err) => {});
};
