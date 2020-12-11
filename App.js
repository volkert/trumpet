import * as React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from './components/Login'
import { MessageList } from './components/MessageList'
import { Settings } from './components/Settings'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'

const Stack = createStackNavigator()

function App() {
  const [name, setName] = React.useState('')
  const [settings, setSettings] = React.useState({
    showCharacterCount: false,
    isInYellMode: false,
    filterOwnMessages: false,
  })

  return (
    <ActionSheetProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ cardStyle: { flex: 1 } }}>
          <Stack.Screen name="Login">
            {props => <Login {...props} setName={setName} name={name} />}
          </Stack.Screen>
          <Stack.Screen
            name="MessageList"
            options={({ navigation }) => ({
              title: 'TRUMPets 🎺',
              headerRight: () => (
                <TouchableHighlight
                  onPress={() => navigation.navigate('Settings')}
                  underlayColor="#fff"
                >
                  <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 18, color: '#007AFF' }}>
                      Settings
                    </Text>
                  </View>
                </TouchableHighlight>
              ),
            })}
          >
            {props => (
              <MessageList {...props} name={name} settings={settings} />
            )}
          </Stack.Screen>
          <Stack.Screen name="Settings">
            {props => (
              <Settings
                {...props}
                settings={settings}
                setSettings={setSettings}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ActionSheetProvider>
  )
}

export default App
