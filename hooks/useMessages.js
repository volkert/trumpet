import * as React from 'react'

import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAEEpFQ3gP_aVXF3JAB2AR9pnoU7lLCu3U',
  authDomain: 'some-chat-534e2.firebaseapp.com',
  databaseURL: 'https://some-chat-534e2.firebaseio.com',
  projectId: 'some-chat-534e2',
  storageBucket: 'some-chat-534e2.appspot.com',
  messagingSenderId: '107247132349',
  appId: '1:107247132349:web:5c631397b063f02ce5a1d4',
}

const CHAT_MESSAGES = 'chatMessages'


export function useMessages() {
  const [messages, setMessages] = React.useState([])
  const firebaseDatabaseReference = React.useRef(null)

  React.useEffect(() => {
    if (!firebaseDatabaseReference.current) {
      if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)
      firebaseDatabaseReference.current = firebase.database()
      firebaseDatabaseReference.current
        .ref(CHAT_MESSAGES)
        .on('value', snapshot => {
          setMessages(Object.entries(snapshot.val() || {}).reverse())
        })
    }
    return () => {
      console.log('OFF')
      firebaseDatabaseReference.current.ref(CHAT_MESSAGES).off()
    }
  }, [])

  const sendMessage = React.useCallback(async (name, message) => {
    await firebaseDatabaseReference.current.ref(CHAT_MESSAGES).push({
      name,
      content: message,
      createdAt: new Date().toISOString(),
    })
  }, [])

  const removeMessage = React.useCallback(async id => {
    await firebase.database().ref(`${CHAT_MESSAGES}/${id}`).remove()
  }, [])

  const hateMessage = React.useCallback(async (name, id) => {
    const ref = firebase.database().ref(`${CHAT_MESSAGES}/${id}/hates`)
    const haters = (await ref.once('value')).val() ?? []

    let newHaters

    if (haters.includes(name)) {
      newHaters = haters.filter(hater => hater !== name)
    } else {
      newHaters = Array.from(new Set([...haters, name]))
    }

    await ref.set(newHaters)
  })

  const toggleFakeNewsMessage = React.useCallback(async id => {
    const ref = firebase.database().ref(`${CHAT_MESSAGES}/${id}/fakenews`)
    const isFakeNews = (await ref.once('value')).val()
    await ref.set(!isFakeNews)
  })

  return {
    messages,
    sendMessage,
    removeMessage,
    hateMessage,
    toggleFakeNewsMessage
  }
}
