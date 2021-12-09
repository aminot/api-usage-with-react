
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { useTheme } from '@react-navigation/native';





function Mainpage({ navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://gorest.co.in/public/v1/users')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const { colors } = useTheme();


  return (

    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
        <View style={{ width: 120 }}>
          <Button
            onPress={() => {

              navigation.navigate('AddUsers', {})
            }}

            title="Add User"
            color={colors.buttonColor}

          />
        </View>
        <View style={{ width: 120 }}>
          <Button
            onPress={() => {

              navigation.navigate('ListUsers', {})
            }}

            title="List Users"
            color={colors.buttonColor}

          />
        </View>

      </View>
      {isLoading ? <Text>Loading...</Text> :
        (<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>








          <View style={{ justifyContent: "space-between", flexDirection: "row", paddingTop: 5, paddingLeft: 15, paddingRight: 15, paddingBottom: 10 }} >
            <Text style={{ fontWeight: "bold", color: colors.text }}>ID</Text>
            <Text style={{ fontWeight: "bold", color: colors.text }}>NAME</Text>

            <Text style={{ fontWeight: "bold", color: colors.text }}>DETAIL</Text>
          </View>

          <FlatList
            data={data.data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (

              <          TouchableOpacity onPress={() => {

                navigation.navigate('UsersDetail', { id: item.id, name: item.name, email: item.email, gender: item.gender, status: item.status })
              }}>

                <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 17 }}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ width: 50, paddingLeft: 10 }} >
                      <Text style={{ fontWeight: "bold", color: colors.text }}>{item.id}</Text>
                    </View>
                    <Text style={{ paddingLeft: 15, color: colors.text }}>{item.name}</Text>
                  </View>

                  <Image style={styles.imageStyle} source={require('../assest/next.png')} />
                </View>
                <View style={{
                  flex: 1, paddingTop: 5, borderBottomColor: 'gray',
                  borderBottomWidth: 3, paddingBottom: 5,
                }} />
              </TouchableOpacity>

            )}
          />
        </View>
        )}
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

export default Mainpage;