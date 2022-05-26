import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ProfileScreen = () => {
 
  return (
    <View style={styles.Container}>
      <Text style={{color: '#5e4a42', fontSize: 20}}>Page 5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default ProfileScreen;
