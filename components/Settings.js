import * as React from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'

export function Settings({ settings, setSettings }) {
  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Show character count</Text>
        <Switch
          onValueChange={showCharacterCount =>
            setSettings({ ...settings, showCharacterCount })
          }
          value={settings.showCharacterCount}
        />
      </View>
      {/* TODO: #1 YELL MODE
          activate Switch to enable Yell mode
      */}
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Activate Yell-Mode 📢</Text>
        <Switch
          onValueChange={isInYellMode =>
            setSettings({ ...settings, isInYellMode })
          }
          value={settings.isInYellMode}
        />
      </View>

      {/* TODO: #5 FILTER OWN TRUMPEETS
          activate Switch to see only own trumpeets
      */}
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Only show own trumpeets 🤳</Text>
        <Switch
          onValueChange={filterOwnMessages =>
            setSettings({ ...settings, filterOwnMessages })
          }
          value={settings.filterOwnMessages}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  switchContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: { fontSize: 16 },
})
