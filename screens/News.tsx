import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import NewsFeed from '../components/NewsFeed/NewsFeed'
import { FONTS } from '../constants'

export default function News() {
  return (
    <View style={styles.newsWrapper}>
      <Text style={styles.title}>Trending News</Text>
      <NewsFeed />
    </View>
  )
}

const styles = StyleSheet.create({
  newsWrapper: {
    backgroundColor: '#1E2127',
    height: '100%',
    paddingHorizontal: 15,
    paddingVertical: 35,
    flex: 1
  },
  title: {
    color: 'yellow',
    fontFamily: FONTS.bold,
    fontSize: 20,
    marginBottom: 15
  }
})