
import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const App = () => {
  const handleFetch = () => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Pressable onPress={handleFetch}>
        <Text>Fetch Users from Backend</Text>
      </Pressable>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})