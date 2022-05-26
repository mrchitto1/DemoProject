import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SignIn = props => {
  return (
    <View style={styles.Container}>
      <ImageBackground
        source={require('../Src/backgroundImg.jpeg')}
        style={styles.image}>
        <View style={styles.SignInContainer}>
          <View style={styles.TextInputContainer}>
            <View style={styles.FirstTextInput}>
              <Ionicons name="ios-person-sharp" size={20} color="#5e4a42" />
              <TextInput
                style={{color: '#5e4a42'}}
                placeholder="Email or Username"
                placeholderTextColor="#5e4a42"
              />
            </View>
            <View style={styles.SecondTextInput}>
               <Ionicons name="lock-closed" size={20} color="#5e4a42" />
              <TextInput
                style={{color: '#5e4a42'}}
                placeholder="Password"
                placeholderTextColor="#5e4a42"
                secureTextEntry= {true}
              />
            </View>
          </View>
          <View style={styles.ButtonContainer}>
            <TouchableOpacity>
              <Text>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {props.navigation.navigate("MyTabs")}}>
              <Text>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextStyling: {
    color: 'black',
    fontSize: 20,
  },
  SignInContainer: {
    height: '18%',
    width: '75%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 5.0,
    elevation: 7,
  },
  TextInputContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
  FirstTextInput: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 10,
    flexDirection: 'row',
  },
  SecondTextInput: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: '#5e4a42',
    alignItems: 'center',
    paddingLeft: 10,
    flexDirection: 'row',
  },
  ButtonContainer: {
    height: 55,
    backgroundColor: 'blue',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#5e4a42',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 25,
  },
});

export default SignIn;
