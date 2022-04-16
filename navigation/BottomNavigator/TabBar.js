import React from "react";
import StaticTabBar from "./StaticTabBar";

const TabBar = (props) => {
  const { state, descriptors, navigation } = props;
  return <StaticTabBar {...{ state, descriptors, navigation }} />;
};

export default TabBar;
