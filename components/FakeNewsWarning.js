import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import WarningIcon from '../assets/warning-icon'

export const FakeNewsWarning = () => (
  <View style={styles.fakenews}>
    <WarningIcon width={16} height={16} style={{ marginRight: 4 }} />
    <Text style={styles.fakenewsText}>This claim is disputed.</Text>
  </View>
)

const styles = StyleSheet.create({
  fakenews: {
    color: '#1da1f2',
    flexDirection: 'row',
    marginBottom: 4
  },
  fakenewsText: {
    fontWeight: "bold",
    color: '#1da1f2',
  }
})
