import { defineStore } from "pinia";
import type { IMember } from "../interfaces/member";

export const useMembersStore = defineStore({
  id: "members",
  state: () => ({
    members: [] as IMember[],
  }),
  getters: {
    getMembers: (state) => state.members,
  },
  actions: {
    setMembers(members: IMember[]) {
      this.members = members;
    },
    addMember(member: IMember) {
      this.members.push(member);
    },
  },
});
