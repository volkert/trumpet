import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export const FakeNewsWarning = () => (
  <View style={styles.fakenews}>
    <Image style={{ marginRight: 4, height: 14, width: 14 }} source={require("../assets/warning.png")} ></Image>
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
