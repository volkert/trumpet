import * as React from 'react'
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native'
import { PrimaryButton } from './PrimaryButton'

export function Login({ navigation, setName, name }) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="position"
      keyboardVerticalOffset={-70}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.headline}>TRUMPet</Text>
        <Text style={styles.logo}>🎺</Text>
        <View style={{ marginBottom: 24 }}>
          <Text style={styles.greeting}>What's your name?</Text>
        </View>
        <TextInput
          value={name}
          onChangeText={text => setName(text)}
          textAlign="center"
          style={styles.userName}
        />
        <PrimaryButton
          title="Log in"
          disabled={!name}
          onPress={() => navigation.navigate('MessageList')}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1da1f2',
  },
  innerContainer: {
    padding: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  headline: {
    fontWeight: '700',
    fontSize: 36,
    color: '#fff',
  },
  logo: { fontSize: 72, marginBottom: 64 },
  greeting: {
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
  userName: {
    height: 56,
    fontSize: 24,
    backgroundColor: 'rgba(256, 256, 256, 1)',
    width: 200,
    marginBottom: 24,
    padding: 4,
    borderRadius: 5
  },
})
