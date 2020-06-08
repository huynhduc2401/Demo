import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, FlatList, Animated, Dimensions, CameraRoll, ImagePicker } from 'react-native';
import WallPaperManager from 'react-native-wallpaper-manager';
import * as MediaLibrary from 'expo-media-library';
import ImageViewer from 'react-native-image-zoom-viewer';
import ImageZoom from 'react-native-image-pan-zoom';
import * as Sharing from 'expo-sharing';

import * as FileSystem from 'expo-file-system';
export default function homeScreen({ route, navigation }) {
  const { name } = route.params;
  const { date } = route.params;
  const { owner } = route.params;
  const { tag } = route.params;
  const { height } = route.params;
  const { width } = route.params;
  function share() {
    FileSystem.downloadAsync(
      name,
      FileSystem.documentDirectory + '.jpeg'
    )
      .then(({ uri }) => {
        console.log('Finished downloading to ', uri);

        Sharing.shareAsync(uri);

      })
      .catch(error => {
        console.error(error);
      });
  }


  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <ImageZoom cropWidth={Dimensions.get('window').width}
          cropHeight={Dimensions.get('window').height}
          imageWidth={width}
          imageHeight={height+50}
        >
          <Image style={{ width: width, height: height }}
            source={{ uri: name }} />
        </ImageZoom>


      </View>
      <View style={{ width: 120, height: 30, alignSelf: 'flex-end', margin: 15 }}>
        <TouchableOpacity
          onPress={() => {

            MediaLibrary.saveToLibraryAsync(name);

            alert('LƯU THÀNH CÔNG!')
          }}
          style={styles.button} >
          <Text style={{ fontSize: 18, color: '#008800' }}>Download</Text>
        </TouchableOpacity></View>

      <View style={{ width: 120, height: 30, alignSelf: 'flex-end', alignContent: 'center', margin: 15 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('infor', { name: name, date: date, owner: owner, tag: tag })}


          style={styles.button} >
          <Text style={{ fontSize: 18, color: '#008800' }}>Information</Text>
        </TouchableOpacity></View>

      <View style={{ width: 120, height: 30, alignSelf: 'flex-end', alignContent: 'center', margin: 15 }}>
        <TouchableOpacity
          onPress={() => share()

          }
          style={styles.button} >
          <Text style={{ fontSize: 18, color: '#008800' }}>Share</Text>
        </TouchableOpacity></View>

      <View style={{ width: 120, height: 30, alignSelf: 'flex-end', alignContent: 'center', margin: 15 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}


          style={styles.button} >
          <Text style={{ fontSize: 18, color: '#008800' }}>X</Text>
        </TouchableOpacity>
    
        </View>


    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  button: {
    flex: 9,
    backgroundColor: '#FFFF33',
    borderRadius: 100,
    alignItems: 'center',
    alignContent: 'center',
    width: 110, height: 100, alignSelf: 'center',
    padding: 4


  }
});