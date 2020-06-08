import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Image, processColor } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ProfileScreen({ navigation }) {

  const [dulieu, setdulieu] = useState();
  return (
    <View>
      <FlatList
        numColumns='2'
        data={dulieu}
        renderItem={({ item }) =>
         <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
           onPress={() => navigation.navigate('phongto', { name: item.url_l, date: item.datetaken, owner: item.ownername, tag: item.tags, width: item.width_l, height: item.height_l })
          }
          ><Text style={{ fontSize: 12, textAlign: "center", color: '#008080', margin: 20, marginBottom: 0, marginLeft: 5, backgroundColor: '#FFFF99', width: 180 }}>{item.title}</Text>
            <Image style={{ width: 180, height: 280, borderRadius: 10, margin: 10 }}
              source={{ uri: item.url_l }} />
            <Text style={{ color: '#660000', marginLeft: 5 }}>Lượt xem: {item.views}</Text>
          </TouchableOpacity>

        </View>
        }
        keyExtractor={item => item.id}
      />
      <View style={styles.container}>
        <Button title="LOAD" onPress={() => {
          fetch('https://www.flickr.com/services/rest', {
            method: 'POST',
            body: new URLSearchParams({
              api_key: "d0de649afc5b3d2d342a3419598d72d1",
              user_id: "186966300@N06",
              extras: 'description, license, date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o,tags',
              format: 'json',
              method: 'flickr.favorites.getList',
              nojsoncallback: '1',
              per_page: '40',
              page: '0',
            }).toString(),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
            .then(response => response.json())
            .then(json =>
            // code cập nhật dữ liệu vào useState tại đây
            { setdulieu(json.photos.photo) }
            )
        }} />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200,
  },
});