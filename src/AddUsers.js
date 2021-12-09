import React, { useEffect, useState } from 'react';
import {
    Text, Alert,
    View,
    TextInput,
    Image,

    KeyboardAvoidingView,

    Button
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux"
import { addEmail, addGender, addName, addStatus } from "../redux/actions/listAction"


function AddUsers({ route }) {

    const dispatch = useDispatch();
    const state = useSelector((state) => state)

    const { colors } = useTheme();
    const { name, email, gender, status } = route.params;
    const [tokenid, setTokenid] = useState('de949514de2ed1012380b42077d621820b828645e2065138ac91ba6415f5a483');

    const [nameinput, setname] = useState('');
    const [emailinput, setemail] = useState('');
    const [genderinput, setgender] = useState('');
    const [statusinput, setstatus] = useState('');
    const [register, setRegister] = useState(false);
    const {
        inputStyle,
        imageStyle,

    } = styles;


    useEffect(() => {
        if (register) {


            //If your information could be empty

            if (nameinput == "" || emailinput == "" || genderinput == "" || statusinput == "" || nameinput.length <= 2) {
                Alert.alert(
                    'There are some mistakes',
                    'please fill in the blank fields',
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false },
                );

            }

            else {

                // if not
                fetch('https://gorest.co.in/public/v1/users', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + tokenid,
                    },
                    body: JSON.stringify({
                        name: nameinput,
                        gender: genderinput,
                        email: emailinput,
                        status: statusinput,
                    })
                }).then((response) => response.json())
                    .then((responseData) => {
                        console.log("RESULTS HERE:", responseData)
                        Alert.alert(
                            'OKAY',
                            'Registration Successful',
                            [
                                { text: 'OK', onPress: () => console.log('OK Pressed') },
                            ],
                            { cancelable: false },
                        );
                        dispatch(addName(nameinput))
                        dispatch(addEmail(genderinput))
                        dispatch(addGender(emailinput))
                        dispatch(addStatus(statusinput))

                    })
                    .catch((error) => {
                        console.error(error);
                    })





            }



            setRegister(false)


        }

    });








    return (


        <KeyboardAvoidingView style={styles.container} >











            <View style={{ paddingTop: 10, alignItems: "center", flex: 1 }}>


                <Image style={imageStyle} source={require('../assest/male.png')} />

            </View>




            <View style={{ paddingTop: 10 }}>







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
                        placeholder="Please enter email"
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
                        source={require('../assest/gender.png')}
                    />

                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Please enter gender"
                        onChangeText={genderinput => setgender(genderinput)}
                        defaultValue={genderinput}
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
                        placeholder="Please enter status"
                        onChangeText={statusinput => setstatus(statusinput)}
                        defaultValue={statusinput}
                    />







                </View>


                <View style={{ marginLeft: 30, marginRight: 30, paddingTop: 10 }}>

                    <Button
                        onPress={() => { setRegister(true) }}

                        title="Add Users"
                        color={colors.buttonColor}

                    />

                </View>

            </View>



            <Text
                style={{
                    fontSize: 10,
                    opacity: 0.5,
                    flex: 1,
                    textAlign: 'center',
                    fontWeight: "bold"
                }}>
                By registering,
                You agree to our Terms and Data Policies.
            </Text>






        </KeyboardAvoidingView >


    );
};

const styles = {

    inputStyle: {
        fontSize: 15,
        flex: 1,
        height: 40,
        color: 'black',
        paddingLeft: 5
    },
    imageStyle: {
        width: 150,
        height: 160,
        alignItems: 'center',



    },

    textStyle: {
        color: 'gray',
    },


    imageStyle2: {
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
    container: {

        flex: 1,
        behavior: "padding"

    },
};






export default AddUsers;
