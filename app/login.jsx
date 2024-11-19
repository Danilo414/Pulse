import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import FormField from '../components/FormField';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [form, setForm] = useState ({
    email: '',
    password: ''
  })
  return (
    <ScrollView className="flex-1 bg-teal-50 p-4">
      {/* Logo Section */}
      <View className="items-center mt-6">
        {/* ECE Pulse Logo */}
        <Image
          source={require('../assets/Logo.png')}
          style={{ width: 250, height: 100 }}
          resizeMode="contain"
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

      {/* Login Button */}
      <TouchableOpacity className="bg-teal-700 p-3 rounded-md mt-6 items-center justify-center">
        <Link href="./home">
          <Text className="text-white font-bold text-center">LOGIN</Text>
        </Link>
      </TouchableOpacity>

      {/* Register Link */}
        <View className = "items-center mt-4">
      <Link href = "./signup">
      <Text>No account? Register Here!</Text>
      </Link>
      </View>
    </ScrollView>
  );
};

export default Login;
