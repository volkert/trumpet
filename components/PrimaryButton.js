import * as React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

export function PrimaryButton({ title, onPress, disabled }) {
  return (
    <TouchableHighlight
      style={{ borderRadius: 5 }}
      onPress={() => {
        if (!disabled && onPress) {
          onPress()
        }
      }}
    >
      <View style={styles.container}>
        <Text style={[styles.label, { opacity: disabled ? 0.5 : 1 }]}>
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 20,
    color: '#1da1f2',
  },
})
