import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

const Information = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Main Title */}
      <Text style={styles.title}>PULSE Information</Text>

      {/* Section 1 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Us</Text>
        <Text style={styles.paragraph}>
          PULSE is dedicated to providing high-quality healthcare services and information. Our goal is to enhance patient care through innovative solutions and expert knowledge.
        </Text>
      </View>

      {/* Section 2 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Services</Text>
        <Text style={styles.paragraph}>
          - Telemedicine{'\n'}
          - Health Records Management{'\n'}
          - Virtual Consultations{'\n'}
          - Personalized Health Plans{'\n'}
          - 24/7 Support
        </Text>
      </View>

      {/* Section 3 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.paragraph}>
          Email: support@pulsehealth.com{'\n'}
          Phone: +1 (800) 123-4567
        </Text>
      </View>
    </ScrollView>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1', // Light medical-themed background color
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#004d40', // Dark green text
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff', // Light background for sections
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffccbc', // Light red/pink for section titles
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#004d40', // Dark green text
    lineHeight: 22,
  },
});

export default Information;
