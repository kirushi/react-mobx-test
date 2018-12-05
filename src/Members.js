import { types, flow } from "mobx-state-tree";
import { data } from "./members_data";
import MemberInfo from "./MemberInfo";

const Members = types.model("Members", {
  all: types.map(MemberInfo)
}).actions(self => ({
  // eslint-disable-next-line require-yield
  fetch: flow(function*(ID) {
    let member;
    member = self.all.get(ID);
    if (!member) {
      member = data.find(m => m.ID === ID);
      self.all.set(member.ID, member);
    }
  }),
  // eslint-disable-next-line require-yield
  fetchMembers: flow(function*() {
    const members = data;
    members.forEach(member => self.all.set(member.ID, member));
  })
}));

export default Members;