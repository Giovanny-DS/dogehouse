// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck @todo this file needs to be fixed

import React from "react";
import { Story } from "@storybook/react";

import { FollowerOnline, FriendsOnlineProps } from "../ui/FollowersOnline";
import avatar from "../img/avatar.png";

export default {
  title: "FriendsOnline",
  component: FollowerOnline,
};

const user = {
  username: "Lauren Miller",
  avatar,
  isOnline: true,
  activeRoom: {
    name: "The Developers hangout",
  },
};

const onlineFriendList = [user, user, user, user, user];

export const Main: Story<FriendsOnlineProps> = ({ ...props }) => (
  <FollowerOnline
    {...props}
    onlineFriendCount={23}
    onlineFriendList={onlineFriendList}
  />
);

Main.bind({});

export const ZeroFriends: Story<FriendsOnlineProps> = ({ ...props }) => (
  <FollowerOnline {...props} />
);

ZeroFriends.bind({});
