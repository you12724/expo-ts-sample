import React from "react";
import { Icon } from "expo";

import Colors from "../constants/Colors";

interface TabBarIcon {
  name: string;
  focused: boolean;
}

class TabBarIcon extends React.Component<TabBarIcon> {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={
          this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault
        }
      />
    );
  }
}

export default TabBarIcon;