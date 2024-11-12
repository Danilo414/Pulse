import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Link } from 'expo-router';

const signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

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
        <TextInput
          value={firstname}
          onChangeText={setFirstname}
          placeholder="Enter your firstname"
          keyboardType="firstname"
          className="bg-white p-2 rounded-md shadow text-gray-700"
        />
      </View>
        {/* LastName Section */}
      <View className="mt-6">
        <Text className="text-teal-800 mb-1">LastName</Text>
        <TextInput
          value={lastname}
          onChangeText={setLastname}
          placeholder="Enter your lastname"
          keyboardType="lastname"
          className="bg-white p-2 rounded-md shadow text-gray-700"
        />
      </View>


      {/* Email Input */}
      <View className="mt-6">
        <Text className="text-teal-800 mb-1">Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          className="bg-white p-2 rounded-md shadow text-gray-700"
        />
      </View>

      {/* Password Input */}
      <View className="mt-4">
        <Text className="text-teal-800 mb-1">Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
          className="bg-white p-2 rounded-md shadow text-gray-700"
        />
      </View>

      {/* Age Input */}
      <View className="mt-4">
        <Text className="text-teal-800 mb-1">Age</Text>
        <TextInput
          value={age}
          onChangeText={setAge}
          placeholder="Enter your age"
          keyboardType="numeric"
          className="bg-white p-2 rounded-md shadow text-gray-700"
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
