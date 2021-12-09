import React, { useEffect, useState } from 'react';
import { Alert, Text, View, Image, Button, Modal, TextInput, Settings } from 'react-native';
import { useTheme } from '@react-navigation/native';


function UsersDetail({ route, navigation }) {
  const { id, name, email, gender, status } = route.params;

  const [nameinput, setname] = useState(JSON.stringify(name).split('"').join(''));
  const [emailinput, setemail] = useState(JSON.stringify(email).split('"').join(''));
  const [statusinput, setStatus] = useState(JSON.stringify(status).split('"').join(''));

  const [tempname, setTempName] = useState(JSON.stringify(name).split('"').join(''));
  const [tempemail, setTempEmail] = useState(JSON.stringify(email).split('"').join(''));
  const [tempstatus, setTempStatus] = useState(JSON.stringify(status).split('"').join(''));


  const [deleteButton, setDelete] = useState(false);
  const [deleteData, setDeleteData] = useState(false);
  const [tokenid, setTokenid] = useState('de949514de2ed1012380b42077d621820b828645e2065138ac91ba6415f5a483');
  const [modalVisible, setModalVisible] = useState(false);
  const [updateButton, setUpdate] = useState(false);
  const {
    inputStyle,
    imageStyle,

  } = styles;
  const { colors } = useTheme();
  useEffect(() => {


    if (deleteButton) {
      Alert.alert(
        'User Delete',
        'Are you sure you want to delete the user?',
        [
          {
            text: 'OK', onPress: () => setDeleteData(true)

          },
        ],
        { cancelable: false },
      );
      setDelete(false)
    }
    if (deleteData) {

      fetch('https://gorest.co.in/public/v1/users/' + JSON.stringify(id), {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + tokenid,
        },
        body: JSON.stringify({
          name: JSON.stringify(name),
          gender: JSON.stringify(gender),
          email: JSON.stringify(email),
          status: JSON.stringify(status),
        })
      })
        .then(response => response.json())


      Alert.alert(
        "Deleted User"
      )

      navigation.replace("Mainpage");
      setDeleteData(false)

    }
    if (updateButton) {
      console.log("asa", JSON.stringify(id))
      fetch('https://gorest.co.in/public/v1/users/' + JSON.stringify(id), {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + tokenid,
        },
        body: JSON.stringify({
          name: nameinput,
          email: emailinput,
          status: statusinput,
        })
      })
        .then(response => response.json())
        .then(console.log("yyyyyyyyyy"),
          setTempName(nameinput),
          setTempEmail(emailinput),
          setTempStatus(statusinput),
        )
      setModalVisible(false);
      setUpdate(false)
    }
  });

  return (

    <View style={{ flex: 1, backgroundColor: colors.background }}>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}

      >
        <View style={{ backgroundColor: colors.background, flex: 1 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 25, backgroundColor: colors.background }}>
            <Image style={styles.imageStyle} source={require('../assest/male.png')} />
          </View>
          <View style={{
            flexDirection: 'row',

            borderRadius: 10,
            backgroundColor: colors.inputTextColor,
            marginTop: 10,
            marginRight: 20,
            marginLeft: 20
          }}>
            <Image
              style={styles.imageStyle2}
              source={require('../assest/personoutline.png')}
            />

            <TextInput
              style={{ height: 40 }}
              placeholder="Please enter name"
              onChangeText={nameinput => setname(nameinput)}
              defaultValue={nameinput}
            />
          </View>
          <View style={{
            flexDirection: 'row',

            borderRadius: 10,
            backgroundColor: colors.inputTextColor,
            marginTop: 10,
            marginRight: 20,
            marginLeft: 20
          }}>
            <Image
              style={styles.imageStyle2}
              source={require('../assest/emailicon.png')}
            />

            <TextInput
              style={{ height: 40 }}
              placeholder="Please enter name"
              onChangeText={emailinput => setemail(emailinput)}
              defaultValue={emailinput}
            />
          </View>
          <View style={{
            flexDirection: 'row',

            borderRadius: 10,
            backgroundColor: colors.inputTextColor,
            marginTop: 10,
            marginRight: 20,
            marginLeft: 20
          }}>
            <Image
              style={styles.imageStyle2}
              source={require('../assest/lock.png')}
            />

            <TextInput
              style={{ height: 40 }}
              placeholder="Please enter name"
              onChangeText={statusinput => setStatus(statusinput)}
              defaultValue={statusinput}
            />
          </View>



          <View style={{ marginLeft: 30, marginRight: 30, paddingTop: 10 }}>
            <Button
              onPress={() => { setUpdate(true) }}

              title="Update Users"
              color={colors.buttonColor}

            />
          </View>
        </View>
      </Modal>

      {JSON.stringify(gender).split('"').join('') === 'male' ?

        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 25 }}>
          <Image style={styles.imageStyle} source={require('../assest/male.png')} />
        </View>

        : null}

      {JSON.stringify(gender).split('"').join('') === 'female' ?

        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 25 }}>
          <Image style={styles.imageStyle} source={require('../assest/female.png')} />
        </View>

        : null}


      <View style={{ paddingTop: 15 }}>
        <Text style={{ fontSize: 16, textAlign: "center", fontWeight: "bold", color: colors.text }}>{tempname}</Text>
        <Text style={{ fontSize: 16, textAlign: "center", fontWeight: "bold", color: colors.text }}>{JSON.stringify(id)}</Text>
      </View>



      <View style={{ justifyContent: 'flex-start', alignItems: 'center', paddingTop: 25, flexDirection: "row" }}>
        <View>
          <Image style={{ width: 35, height: 35, marginLeft: 20 }} source={require('../assest/email.png')} />
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 12, textAlign: "center", color: colors.text, marginLeft: 20 }}>{tempemail}</Text>
          <Text style={{ fontSize: 12, textAlign: "center", color: colors.text, marginLeft: 20, opacity: 0.5 }}>personal</Text>
        </View>
      </View>

      <View style={{ justifyContent: 'flex-start', alignItems: 'center', paddingTop: 25, flexDirection: "row" }}>
        <View>
          <Image style={{ width: 35, height: 35, marginLeft: 20 }} source={require('../assest/lock.png')} />
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 12, textAlign: "center", color: colors.text, marginLeft: 20 }}>{tempstatus}</Text>

        </View>
      </View>
      <View style={{ marginLeft: 30, marginRight: 30, paddingTop: 10 }}>
        <Button
          onPress={() => { setDelete(true) }}

          title="Delete Users"
          color={colors.buttonColor}

        />
      </View>
      <View style={{ marginLeft: 30, marginRight: 30, paddingTop: 10 }}>
        <Button
          onPress={() => { setModalVisible(true); }}

          title="Update Users"
          color={colors.buttonColor}

        />
      </View>
    </View>
  );
};

const styles = {

  imageStyle: {
    width: 170,
    height: 170,
    resizeMode: "cover",
    borderRadius: 100,
    backgroundColor: "orange"


  }, imageStyle2: {
    height: 25,
    width: 15,
    resizeMode: 'contain',
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
    marginLeft: 5,
    color: "#372837"

  },
}

export default UsersDetail;
