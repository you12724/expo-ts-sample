import { ExpoLinksView } from '@expo/samples'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

export default class LinksScreen extends React.Component {
  public static navigationOptions = {
    title: 'Links'
  }

  public render() {
    return (
      <ScrollView style={styles.container}>
        <ExpoLinksView />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 15
  }
})
