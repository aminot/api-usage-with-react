import React, { useState } from 'react'

import {
  NavigationContainer,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Image, TouchableOpacity, useColorScheme } from 'react-native'
import Mainpage from './src/Mainpage'
import UsersDetail from './src/UsersDetail'
import AddUsers from './src/AddUsers'
import ListUsers from './src/ListUsers'
import { Provider } from 'react-redux'
import store from './redux/store'



const Stack = createStackNavigator()

function App() {
  const [scheme, setTheme] = useState('dark');
  const [menuColor, setMenuColor] = useState('black');
  const [menu, setMenu] = useState('orange');
  const MyTheme = {

    dark: true,
    colors: {
      inputTextColor: "white",
      background: '#4B4B4B',
      buttonColor: 'orange',
      text: 'white',

    },
  };

  const MyTheme2 = {
    dark: false,
    colors: {
      inputTextColor: "gray",
      background: 'white',
      buttonColor: 'gray',

      text: 'black',


    },
  };

  return (
    <Provider store={store}>
      <NavigationContainer theme={scheme === "dark" ? MyTheme : MyTheme2}>

        <Stack.Navigator>
          <Stack.Screen name="Mainpage" component={Mainpage}
            options={{
              title: 'Users',

              headerStyle: {
                backgroundColor: menu,

              },

              headerRight: () => (
                <TouchableOpacity

                  onPress={() => {
                    if (scheme === "dark") {
                      setTheme("Ligh")
                      setMenuColor("#000")
                      setMenu("orange")
                    }
                    else if (scheme === "Ligh") {
                      setTheme("dark")
                      setMenuColor("#fff")
                      setMenu("gray")
                    }

                  }}




                >
                  {scheme === "dark" ?
                    <Image style={{ width: 35, height: 35 }} source={require('./assest/lamp.png')} />

                    : null}
                  {scheme === "Ligh" ?
                    <Image style={{ width: 35, height: 35 }} source={require('./assest/offlamp.png')} />

                    : null}

                </TouchableOpacity>
              ),
              headerTintColor: menuColor,
              headerTitleStyle: {

              },
            }} />
          <Stack.Screen name="UsersDetail" component={UsersDetail}
            options={{
              title: 'Users Detail',
              headerStyle: {
                backgroundColor: menu,
              },
              headerTintColor: menuColor,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} />
          <Stack.Screen name="AddUsers" component={AddUsers} options={{
            title: 'New Users',
            headerStyle: {
              backgroundColor: menu,
            },
            headerTintColor: menuColor,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
          <Stack.Screen name="ListUsers" component={ListUsers} options={{
            title: 'List Users',
            headerStyle: {
              backgroundColor: menu,
            },
            headerTintColor: menuColor,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />


        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
  )
}
export default App