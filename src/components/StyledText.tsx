import React from 'react'
import { Text } from 'react-native'

interface MonoTextProps {
  style: any
}

export class MonoText extends React.Component<MonoTextProps> {
  public render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />
  }
}
