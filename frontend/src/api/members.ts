import request from "./request";

export function list() {
  return request({
    url: "/api/members",
    method: "get",
  });
}

export function create(member) {
  return request({
    url: "/api/members",
    method: "post",
    data: member,
  });
}
