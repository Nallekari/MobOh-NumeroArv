import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, Text, View, Button, Alert } from 'react-native';

export default function App() {

  const [text, setText] = useState('Guess a number between 1-100');

  const [text2, setText2] = useState(0);

  const [number, setNumber] = useState('')

  const [counter, setCounter] = useState(1)

  useEffect(() => {
    setNumber(Math.floor(Math.random() * 100) +1)
  }, []);
  

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
        keyboardType = 'numeric'
        onChangeText={text2 => setText2(text2)} 
        value={text2}
      />
      <Button onPress={numberComparison} title="MAKE GUESS"></Button>
      <StatusBar style="auto" />
    </View>
  );

  function numberComparison() {

    if (parseInt(text2, 10) > number) {
      setText('Your guess ' + text2 + ' is too high')
      setCounter(counter => counter + 1);
      } else
    if (parseInt(text2, 10) < number) {
      setText('Your guess ' + text2 + ' is too low')
      setCounter(counter => counter+1)
      }
    else {
      Alert.alert('You guessed the number in ' + counter + ' guesses')
      setNumber(Math.floor(Math.random() * 100) +1)
      setCounter(1);
      setText('Guess a number between 1-100')
      setText2(0)
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
