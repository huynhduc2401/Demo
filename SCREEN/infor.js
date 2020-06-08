import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';


export default function infor({ route, navigation }) {
  const { name } = route.params;
  const { date } = route.params;
  const { owner } = route.params;
  const { tag } = route.params;
  return (




    <View style={styles.container}>
      <Text>Link ảnh:  {name}
      </Text>
      <Text>Ngày đăng:  {date}
      </Text>
      <Text>Người đăng:  {owner}
      </Text>
      <Text>Tags:  {tag}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    padding: 20

  },


});