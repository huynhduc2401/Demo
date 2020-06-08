import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import homeScreen from './SCREEN/homeScreen';
import ProfileScreen from './SCREEN/ProfileScreen';
import CAMERA from './SCREEN/CAMERA';
import phongto from './SCREEN/phongto';
import infor from './SCREEN/infor';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={homeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name='Profile'
          component={ProfileScreen}
          options={{ title: 'Thư viện hình nền' }} />
        <Stack.Screen
           name='CAMERA'
          component={CAMERA}
          options={{ title: 'Camera' }} />
        <Stack.Screen name='phongto'
          component={phongto}
          options={{ title: 'Picture' }} />
        <Stack.Screen name='infor'
          component={infor}
          options={{ title: 'Information' }} />

      </Stack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
