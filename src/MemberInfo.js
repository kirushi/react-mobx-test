import { types } from "mobx-state-tree";

const MemberInfo = types.model("MemberInfo", {
  ID: types.identifierNumber,
  FirstName: types.string,
  LastName: types.string,
}).views(self => ({
  get fullName() {
    return `${self.FirstName} ${self.LastName}`;
  }
}));

export default MemberInfo;