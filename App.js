// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../DemoProject/Screens/SignIn';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import Screens for Tab Navigation
import HomeScreen from './Screens/Home';
import NotificationsScreen from './Screens/NotificationsScreen';
import CameraScreen from './Screens/Camera';
import SearchScreen from './Screens/Search';
import ProfileScreen from './Screens/Profile';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: '10%',
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
        },
        tabBarItemStyle: {},
      }}>
      <Tab.Screen
        name="Page 1"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={30} color="#5e4a42" />
          ),
          headerStyle: {
            height: 70,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          },
          headerTitleStyle: {
            fontSize: 20,
        }}}
      />
      <Tab.Screen
        name="Page 2"
        component={SearchScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="search-sharp" size={30} color="#5e4a42" />
          ),
        }}
      />
      <Tab.Screen
        name="Page 3"
        component={CameraScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.Container1}>
              <View style={styles.Container2}>
                <View style={styles.Container3}></View>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Page 4"
        component={NotificationsScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="infinite-outline" size={30} color="#5e4a42" />
          ),
          
        }}
      />
      <Tab.Screen
        name="Page 5"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.ImageContainer}>
              <Image source={require('./Src/dp.png')} style={styles.image} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  Container1: {
    borderWidth: 2,
    borderColor: '#5e4a42',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Container2: {
    borderWidth: 2,
    borderColor: '#5e4a42',
    height: 40,
    width: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Container3: {
    backgroundColor: 'black',
    padding: 10,
    borderWidth: 2,
    borderColor: '#5e4a42',
    height: 35,
    width: 35,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageContainer: {
    height: 32,
    width: 32,
    borderRadius: 16,
    borderWidth: 15,
    borderColor: '#5e4a42',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems:'center'
  },
  image: {
    height: 29,
    width: 29,
    borderRadius: 25
  },
});
export default App;
