import * as React from 'react'
import {
  View,
  TextInput,
  Text,
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native'
import { useMessages } from '../hooks/useMessages'
import { Message } from './Message'
import { PrimaryButton } from './PrimaryButton'
import { sanitize } from '../utils/sanitize'
import { useActionSheet } from '@expo/react-native-action-sheet'
import { isRealDonald as checkRealDonald } from '../utils/isRealDonald'

export const MessageList = ({ name, settings }) => {
  const {
    messages,
    sendMessage,
    removeMessage,
    hateMessage,
    toggleFakeNewsMessage,
  } = useMessages()
  const [messageInput, setMessageInput] = React.useState('')
  const { showActionSheetWithOptions } = useActionSheet()
  const isRealDonald = checkRealDonald(name)

  const send = React.useCallback(() => {
    let message = sanitize(messageInput)

    // TODO: #1 YELL MODE
    // tranform message to yell mode specification
    if (settings.isInYellMode) {
      message = message.toUpperCase()
    }

    sendMessage(name, message)
    setMessageInput('')
  }, [setMessageInput, sendMessage, messageInput, settings])

  const longPressHandler = React.useCallback(
    (id, ownerName) => {
      let options = ['Cancel']
      // TODO: #4 this should be true if you are the trumpeet's owner only
      if (true) {
        options = ['Delete Trumpeet', ...options]
      }

      // TODO: #3 this should be true if you are the real Donald
      if (false) {
        options = ['FAKE NEWS', ...options]
      }
      const fakeNewsButtonIndex = options.findIndex(item =>
        item.match(/fake news/i)
      )
      const destructiveButtonIndex = options.findIndex(item =>
        item.match(/delete/i)
      )
      const cancelButtonIndex = options.findIndex(item => item.match(/cancel/i))

      if (!fakeNewsButtonIndex && !destructiveButtonIndex) return
      showActionSheetWithOptions(
        {
          options,
          cancelButtonIndex,
          destructiveButtonIndex,
        },
        buttonIndex => {
          switch (buttonIndex) {
            case destructiveButtonIndex:
              removeMessage(id)
              break
            // TODO: #3 Fake News: Handle click on fakeNewsButtonIndex.
            default:
              break
          }
        }
      )
    },
    [removeMessage]
  )

  const hateHandler = React.useCallback(id => {
    hateMessage(name, id)
  })

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <FlatList
        style={styles.messageList}
        // TODO: #5 filter to own messages if activated in settings
        data={messages}
        keyExtractor={([id]) => id}
        renderItem={({ item }) => (
          <Message
            onLongPress={longPressHandler}
            item={item}
            onHate={hateHandler}
            currentName={name}
          />
        )}
      />
      <View style={styles.sendMessageContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            value={messageInput}
            onChangeText={text => setMessageInput(text)}
            style={styles.messageInput}
            placeholder="Trumpet a message"
          />
          <PrimaryButton
            title="Send 🎺"
            onPress={send}
            disabled={!messageInput}
          />
        </View>
        {settings.showCharacterCount && (
          <Text style={styles.characterCount}>
            Characters: {messageInput.length}
          </Text>
        )}
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  characterCount: { color: '#fff' },
  sendMessageContainer: {
    backgroundColor: '#1da1f2',
    paddingBottom: 16,
    paddingTop: 16,
    paddingHorizontal: 26,
  },
  inputContainer: {
    flexDirection: 'row',
    borderTopWidth: 2,
    borderTopColor: '#1da1f2',
    alignItems: 'center',
  },
  messageInput: {
    flex: 1,
    borderColor: '#1da1f2',
    borderWidth: 2,
    padding: 5,
    backgroundColor: 'white',
    height: 48,
    marginRight: 10,
  },
  messageList: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 8,
  },
})
