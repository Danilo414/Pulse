import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Link } from 'expo-router';
import FormField from '../components/FormField';

const signup = () => {
  const [gender, setGender] = useState('');
  const [form, setForm] = useState ({
    email: '',
    password: '',
    Lastname: '',
    Firstname: '',
    age: ''
  })

  return (
    <ScrollView className="flex-1 bg-teal-50 p-4">
      {/* Logo Section */}
      <View className="items-center mt-6">
        {/* ECE Pulse Logo */}
        <Image
          source={require('../assets/Logo.png')}
          style={{ width: 230, height: 70 }}
          resizeMode="contain"
        />
      </View>
        {/* FirstName Section */}
      <View className="mt-6">
        <Text className="text-teal-800 mb-1">FirstName</Text>
        <FormField
       title = "Firstname"
       value = {form.Firstname}
       handleChangeText={(e) => setForm({ ...form, Firstname: e})}
       otherStyles="mt-5"
       />
      </View>
        {/* LastName Section */}
      <View className="mt-6">
        <Text className="text-teal-800 mb-1">LastName</Text>
        <FormField
       title = "Lastname"
       value = {form.Lastname}
       handleChangeText={(e) => setForm({ ...form, Lastname: e})}
       otherStyles="mt-5"
       />
      </View>


      {/* Email Input */}
      <View className="mt-6">
        <Text className="text-teal-800 mb-1">Email</Text>
        <FormField
       title = "Email"
       value = {form.email}
       handleChangeText={(e) => setForm({ ...form, email: e})}
       otherStyles="mt-5"
       />
      </View>

      {/* Password Input */}
      <View className="mt-4">
        <Text className="text-teal-800 mb-1">Password</Text>
        <FormField
       title = "Password"
       value = {form.password}
       handleChangeText={(e) => setForm({ ...form, password: e})}
       otherStyles="mt-5"
       />
      </View>

      {/* Age Input */}
      <View className="mt-4">
        <Text className="text-teal-800 mb-1">Age</Text>
        <FormField
       title = "Age"
       value = {form.age}
       handleChangeText={(e) => setForm({ ...form, age: e})}
       otherStyles="mt-5"
       />
      </View>

      {/* Gender Picker */}
      <View className="mt-4">
        <Text className="text-teal-800 mb-1">Gender</Text>
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
          className="bg-white p-2 rounded-md shadow"
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Attack Helicopter" value="military" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>

      {/* Login Button */}
      <TouchableOpacity className="bg-teal-700 p-3 rounded-md mt-6 items-center justify-center">
        <Link href="./login">
          <Text className="text-white text-center font-bold">REGISTER</Text>
        </Link>
      </TouchableOpacity>

      {/* Register Link */}
        <View className = "items-center mt-4">
      <Link href = "./login">
      <Text>Already have an account? Login Here!</Text>
      </Link>
      </View>
    </ScrollView>
  );
};

export default signup;
