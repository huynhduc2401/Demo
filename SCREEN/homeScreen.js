import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';


export default function homeScreen({ navigation }) {
  const [Username, setUsername] = useState();
  const [Password, setPassword] = useState();
  return (

    <View style={styles.container}> 

      <Image style={{ width: 150, height: 150, margin: 15, marginTop: 15 }}
        source={{ uri: 'https://cdn1.iconfinder.com/data/icons/web-store-indigo-vol-2/256/Login-512.png' }}
      />
      <TextInput placeholder='Username'

        onChangeText={Username => setUsername(Username)}
        value={Username}
        style={styles.input1}></TextInput>

      <TextInput placeholder='Password' secureTextEntry textContentType="password"
        onChangeText={Password => setPassword(Password)}
        value={Password}
        style={styles.input2}></TextInput>

      <Button title="Login" onPress={() => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            // title: 'foo',
            // body: 'bar',
            // userId: 1,
            Username: 'admin',
            Password: 'admin'
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
          .then(response => response.json())
          .then(json => {
            setUsername(json.Username)
            setPassword(json.Password)
          })
        // .then((responseJson) => {
        //   return responseJson
        // })
        if (Username == 'admin' && Password == 'admin') {
          navigation.navigate('Profile');
          alert('Đăng nhập thành công');
        } else {
          alert('login false');
        }

      }}></Button>

      {/* <Button title="Camera" onPress={() => {
        navigation.navigate('CAMERA');
      }}></Button> */}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  
  },
  input1: {
    width: 400,
    marginTop: 40,
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  },
  input2: {
    width: 400,
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  },
  backgroundImage:{
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7
},
});