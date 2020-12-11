import * as React from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native'
import { formatDistanceToNow, parseISO } from 'date-fns'
import { FakeNewsWarning } from './FakeNewsWarning'

export const Message = ({ item, onLongPress, onHate, currentName }) => {
  const [id, message] = item

  return (
    <Pressable onLongPress={() => onLongPress(id, message.name)}>
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Text style={styles.avatarName}>{message.name[0]}</Text>
        </View>
        <View style={styles.messageContainer}>
          <View style={styles.messageContainerInner}>
            <Text style={styles.messageName}>{message.name}</Text>
            <Text style={styles.messageDate}>
              {formatDistanceToNow(parseISO(message.createdAt), {
                addSuffix: true,
                includeSeconds: true,
              })}
            </Text>
          </View>
          <Text style={styles.messageContent}>{message.content}</Text>
          <View style={styles.messageProperties}>
            {/* TODO: #3 Fake News: Here we likely want to render  */}
            {message.fakenews == true && <FakeNewsWarning />}
            <View>
              {/* TODO: #6 Hate Trumpeet: Add a pressable component that calls `onHate(id)` */}
              {/* In this pressable component show a hate counter */}
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 6,
    borderColor: '#1da1f2',
    borderWidth: 1.3,
    borderRadius: 8,
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 8,
    flexDirection: 'row',
    shadowColor: '#1da1f2',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  avatar: {
    backgroundColor: '#eee',
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
    justifyContent: 'center',
  },
  avatarName: { textAlign: 'center' },
  messageContainer: { flexDirection: 'column', flex: 1 },
  messageContainerInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  messageName: { fontWeight: '800', fontSize: 18 },
  messageDate: { fontWeight: '300', fontSize: 14 },
  messageContent: {
    fontSize: 16,
    fontWeight: '500',
  },
  messageProperties: {
    flexDirection: 'column',
    marginTop: 8,
  },
})
