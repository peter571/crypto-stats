import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Markets from '../components/Markets/Markets'

export default function Home() {
  return (
    <SafeAreaView style={styles.mktWrapper}>
      <Markets />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mktWrapper: {
    backgroundColor: '#1E2127',
    height: '100%',
    paddingHorizontal: 5,
    paddingVertical: 15
  }
})