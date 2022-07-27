import request from "./request";

export function login(data) {
  return request({
    url: "/auth",
    method: "post",
    data: data,
  });
}
