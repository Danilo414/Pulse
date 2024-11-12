import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const User = () => {
  // Example user data
  const user = {
    name: 'Juan Dela Cruz',
    email: 'juandelacruz@example.com',
    phone: '+63 (912) 345-6789',
    avatar: 'https://example.com/avatar.png', // Replace with a valid image URL or local image
    location: 'Quezon City, Philippines',
    insurance: 'PhilHealth - Comprehensive Plan',
    medicalHistory: 'No major illnesses. Last checkup: 2024-07-15',
    upcomingAppointments: [
      { doctor: 'Dr. Maria Santos', date: '2024-10-05', specialty: 'Cardiologist' },
      { doctor: 'Dr. Jose Reyes', date: '2024-12-10', specialty: 'Dermatologist' }
    ]
  };

  return (
    <View style={styles.container}>
      {/* Picture Box */}
      <View style={styles.pictureBox}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
      </View>

      {/* Upload Profile Picture Button */}
      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Upload New Picture</Text>
      </TouchableOpacity>

      {/* User Name */}
      <Text style={styles.name}>{user.name}</Text>

      {/* User Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.info}>{user.email}</Text>

        <Text style={styles.infoLabel}>Phone:</Text>
        <Text style={styles.info}>{user.phone}</Text>

        <Text style={styles.infoLabel}>Location:</Text>
        <Text style={styles.info}>{user.location}</Text>

        <Text style={styles.infoLabel}>Insurance Plan:</Text>
        <Text style={styles.info}>{user.insurance}</Text>

        <Text style={styles.infoLabel}>Medical History:</Text>
        <Text style={styles.info}>{user.medicalHistory}</Text>
      </View>

      {/* Upcoming Appointments */}
      <View style={styles.appointmentContainer}>
        <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
        {user.upcomingAppointments.map((appointment, index) => (
          <View key={index} style={styles.appointmentBox}>
            <Text style={styles.appointmentText}>
              {appointment.specialty} - {appointment.doctor}
            </Text>
            <Text style={styles.appointmentDate}>{appointment.date}</Text>
          </View>
        ))}
      </View>

      {/* Buttons Section */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Medical Records</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutButton]}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#e0f2f1', // Light medical-themed background color
  },
  pictureBox: {
    width: 120,
    height: 120,
    borderRadius: 60, // Fully rounded for avatar
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#004d40', // Dark green border
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  uploadButton: {
    backgroundColor: '#00796b',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  uploadButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#004d40', // Dark green text for name
    marginBottom: 15,
  },
  detailsContainer: {
    width: '90%',
    backgroundColor: '#ffffff', // Light background for details container
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004d40', // Dark green for labels
    marginTop: 10,
  },
  info: {
    fontSize: 16,
    color: '#004d40', // Dark green text for details
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004d40',
    marginBottom: 10,
  },
  appointmentContainer: {
    width: '90%',
    marginBottom: 20,
  },
  appointmentBox: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  appointmentText: {
    fontSize: 16,
    color: '#004d40',
    fontWeight: 'bold',
  },
  appointmentDate: {
    fontSize: 14,
    color: '#00796b',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#004d40', // Dark green button
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#ffccbc', // Light red/pink for log out button
  },
});

export default User;
