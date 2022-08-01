import { View, StyleSheet } from 'react-native'
import React from 'react'
import NewsFeed from '../components/NewsFeed/NewsFeed'

export default function News() {
  return (
    <View style={styles.newsWrapper}>
      <NewsFeed />
    </View>
  )
}

const styles = StyleSheet.create({
  newsWrapper: {
    backgroundColor: '#1E2127',
    height: '100%',
    paddingHorizontal: 5,
    paddingVertical: 25
  }
})