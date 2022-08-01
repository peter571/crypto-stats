import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import NftCard from './NftCard'
import { StatsContext } from '../../context/StatsContext'

export default function Nfts() {
  const { nfts } = useContext(StatsContext)

  return (
    <View style={styles.nftsWrapper}>
      <FlatList
     data={nfts}
     renderItem={({ item }) => {
      return <NftCard name={item.name} logo={item.logo} symbol={item.name} />
     }}
     keyExtractor={(item) => item.id} />
    </View>
  )
}

const styles = StyleSheet.create({
  nftsWrapper: {
    flex: 1
  }
})
