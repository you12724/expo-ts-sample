import { Icon } from 'expo'
import React from 'react'

import Colors from '../constants/Colors'

interface TabBarIconProps {
  name: string
  focused: boolean
}

class TabBarIcon extends React.Component<TabBarIconProps> {
  public render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    )
  }
}

export default TabBarIcon
