import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { observable } from "mobx";

@inject("members")
@observer
class MembersList extends Component {
  @observable loading = true;

  componentDidMount() {
    const { members } = this.props;
    setTimeout(() => {
      members.fetchMembers().then(() => {
        this.loading = false;
      });
    }, 3000);
  }

  render() {
    const { members } = this.props;
    return (
      <div>
        <ul>
          {
            Array.from(members.all.values()).map(member => {
              return (
                <li>{member.fullName}</li>
              )
            })
          }
        </ul>
        <span>{`Loading: ${this.loading ? "Loading" : "Loaded"}`}</span>
      </div>
    );
  }
}

export default MembersList;
