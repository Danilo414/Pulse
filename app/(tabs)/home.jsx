import { View, Text, Button, Image, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search for doctors, services, or health topics..." 
        />
        <Button title="Search" onPress={() => alert('Search button clicked!')} color="#004d40" />
      </View>

      {/* Banner Image */}
      <View style={styles.bannerContainer}>
        <Image
          source={{ uri: 'https://example.com/medical-banner.jpg' }} // Replace with a valid image URL
          style={styles.bannerImage}
        />
      </View>

      {/* Main Title */}
      <Text style={styles.title}>Welcome to PULSE</Text>
      
      {/* Health Tips Section */}
      <Text style={styles.sectionTitle}>Health Tips</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuresContainer}>
        {['Stay Hydrated', 'Exercise Regularly', 'Eat Healthy', 'Get Enough Sleep'].map((tip, index) => (
          <TouchableOpacity key={index} style={styles.featureBox} onPress={() => alert(`${tip} clicked!`)}>
            <Text style={styles.featureText}>{tip}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Featured Doctors Section */}
      <Text style={styles.sectionTitle}>Meet Our Doctors</Text>
      <View style={styles.doctorContainer}>
        {[{ name: 'Dr. Maria Santos', specialty: 'Cardiologist', image: 'https://example.com/doctor1.jpg' },
          { name: 'Dr. Jose Reyes', specialty: 'Dermatologist', image: 'https://example.com/doctor2.jpg' }].map((doctor, index) => (
          <View key={index} style={styles.doctorBox}>
            <Image source={{ uri: doctor.image }} style={styles.doctorImage} />
            <Text style={styles.doctorName}>{doctor.name}</Text>
            <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
            <TouchableOpacity style={styles.buttonSmall} onPress={() => alert(`Book appointment with ${doctor.name}`)}>
              <Text style={styles.buttonText}>Book Appointment</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Testimonials Section */}
      <Text style={styles.sectionTitle}>What Our Patients Say</Text>
      <View style={styles.testimonialsContainer}>
        {[{ name: 'Juan C.', feedback: 'Great service and friendly staff!' },
          { name: 'Ana L.', feedback: 'I received excellent care during my visit.' }].map((testimonial, index) => (
          <View key={index} style={styles.testimonialBox}>
            <Text style={styles.testimonialText}>"{testimonial.feedback}"</Text>
            <Text style={styles.testimonialAuthor}>- {testimonial.name}</Text>
          </View>
        ))}
      </View>

      {/* Quick Actions Section */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.quickActionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={() => alert('Appointment Booking')}>
          <Text style={styles.actionText}>Book Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => alert('View Medical Records')}>
          <Text style={styles.actionText}>View Medical Records</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => alert('Emergency Contact')}>
          <Text style={styles.actionText}>Emergency Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => alert('Find Nearest Pharmacy')}>
          <Text style={styles.actionText}>Find Nearest Pharmacy</Text>
        </TouchableOpacity>
      </View>

      {/* Newsletter Signup Section */}
      <Text style={styles.sectionTitle}>Subscribe to Our Newsletter</Text>
      <View style={styles.newsletterContainer}>
        <TextInput 
          style={styles.newsletterInput} 
          placeholder="Enter your email..." 
        />
        <TouchableOpacity style={styles.newsletterButton} onPress={() => alert('Subscribed!')}>
          <Text style={styles.newsletterButtonText}>Subscribe</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Section with Additional Links */}
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => alert('Contact Us clicked!')}>
          <Text style={styles.footerLink}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Privacy Policy clicked!')}>
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Terms of Service clicked!')}>
          <Text style={styles.footerLink}>Terms of Service</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1', // Medical-themed background color
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    borderColor: '#004d40',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#ffffff',
  },
  bannerContainer: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#004d40',
    textAlign: 'center',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004d40',
    marginLeft: 20,
    marginBottom: 10,
  },
  featuresContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  featureBox: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginRight: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
  },
  featureText: {
    fontSize: 16,
    color: '#004d40',
  },
  doctorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  doctorBox: {
    width: 150,
    alignItems: 'center',
  },
  doctorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004d40',
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#00796b',
    marginBottom: 10,
  },
  buttonSmall: {
    backgroundColor: '#004d40',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  testimonialsContainer: {
    padding: 20,
    backgroundColor: '#f1f8e9',
    marginBottom: 20,
  },
  testimonialBox: {
    marginBottom: 10,
  },
  testimonialText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#004d40',
  },
  testimonialAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#004d40',
    marginTop: 5,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  actionButton: {
    backgroundColor: '#00796b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  actionText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  newsletterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  newsletterInput: {
    flex: 1,
    borderColor: '#004d40',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#ffffff',
  },
  newsletterButton: {
    backgroundColor: '#004d40',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  newsletterButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#004d40',
  },
  footerLink: {
    color: '#004d40',
    fontWeight: 'bold',
  },
});

export default Home;