import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input, Button, Divider } from '@rneui/base'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

import { GlobalContext } from '../context/GlobalState'

export default function LogInForm() {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  return (
    <View style={styles.boxContainer}>

      <Input placeholder="UserName" placeholderTextColor="#999" inputContainerStyle={styles.inputContainer} inputStyle={styles.input} leftIcon={<Icon name="user" size={24} color="#FF8225" />} value={userName} onChangeText={text => setUserName(text)} />

      <Input placeholder="Password" placeholderTextColor="#999" inputContainerStyle={styles.inputContainer} secureTextEntry inputStyle={styles.input} leftIcon={<Icon name="key" size={24} color="#FF8225" />} value={password} onChangeText={text => setPassword(text)} />

      <Button type="clear" title="LogIn" titleStyle={styles.title} containerStyle={styles.buttonContainer}  />

      <Divider />

      <View style={styles.regBtnContainer}>
        <Text style={styles.notice}>Don't Have An Account?</Text>
        <Button type="clear" title="Register" titleStyle={styles.title} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  boxContainer: {
    backgroundColor: '#D2D2D2',
    marginTop: wp('4%'),
    padding: wp('4%'),
    borderRadius: 10,
    marginBottom: wp('4%')
  },
  title: {
    color: '#FF8225',
    fontSize: wp('4%')
  },
  input: {
    color: '#000'
  },
  inputContainer: {
    width: wp('60%'),
    borderBottomColor: '#f5c518',
    borderBottomWidth: 1
  },
  buttonContainer: {
    marginBottom: wp('4%')
  },
  notice: {
    color: '#fff',
    fontSize: wp('4%')
  },
  regBtnContainer: {
    alignItems: 'center',
    paddingTop: wp('4%')
  }
});