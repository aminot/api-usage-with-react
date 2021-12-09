import React, { useState } from 'react';
import { FlatList, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { useSelector } from "react-redux"
import { useTheme } from '@react-navigation/native';



function ListUsers({ navigation, route }) {

  myList = useSelector((state) => state.myList);
  console.log(myList, "mylist")
  const [data, setData] = useState(myList);
  const { colors } = useTheme();
  return (

    <View>

      <View style={{ justifyContent: "space-between", flexDirection: "row", paddingTop: 5, paddingLeft: 15, paddingRight: 15, backgroundColor: "orange", paddingBottom: 10 }} >
        <Text style={{ color: colors.text }}>Name</Text>
        <Text style={{ color: colors.text }}>Email</Text>
        <Text style={{ color: colors.text }}>Gender</Text>
        <Text style={{ color: colors.text, marginRight: 50 }}>Status</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item, index }) => (

          <View style={{ flexDirection: "row", marginTop: 5, justifyContent: "space-between" }}>



            {index % 4 === 0 || index === 0 ?
              <View style={{
                flex: 1, paddingTop: 5, borderBottomColor: 'gray',
                borderBottomWidth: 3, paddingBottom: 5,
              }}>


                <TouchableOpacity style={{ justifyContent: "space-between", flexDirection: "row", flex: 1, paddingTop: 5 }}
                  onPress={() => { navigation.navigate('UsersDetail', { name: data[index], email: data[index + 2], gender: data[index + 1], status: data[index + 3] }) }}>

                  <Text style={{ paddingLeft: 15, color: colors.text }}>{data[index]}</Text>



                  <Text style={{ color: colors.text }} >{data[index + 2]}</Text>



                  <Text style={{ color: colors.text }}>{data[index + 1]}</Text>


                  <Text style={{ color: colors.text }}>{data[index + 3]}</Text>

                  <Image style={styles.imageStyle} source={require('../assest/next.png')} />

                </TouchableOpacity>
              </View>
              : null}

          </View>

        )}
      />


    </View>

  );
};
const styles = {

  imageStyle: {
    width: 20,
    height: 20,
    marginRight: 15,
    resizeMode: 'contain',


  }
}

export default ListUsers;