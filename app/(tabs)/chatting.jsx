import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator
} from 'react-native';
import React, { useState } from 'react';

const Chatting = () => {
  // Sample chat data and state for new messages
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello! How can I assist you today?', sent: false, timestamp: '09:00 AM' },
    { id: '2', text: 'I need some information about your services.', sent: true, timestamp: '09:05 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to handle sending a new message
  const handleSend = () => {
    if (newMessage.trim()) {
      setLoading(true);
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { id: Date.now().toString(), text: newMessage, sent: true, timestamp: new Date().toLocaleTimeString() }
        ]);
        setNewMessage('');
        setLoading(false);
      }, 1000); // Simulate network delay
    }
  };

  return (
    <View style={styles.container}>
      {/* Chat Messages List */}
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.messageContainer, item.sent ? styles.sentMessageContainer : styles.receivedMessageContainer]}>
            {!item.sent && (
              <Image
                source={{ uri: 'https://example.com/avatar-received.jpg' }}
                style={styles.avatar}
              />
            )}
            <View style={[styles.messageBubble, item.sent ? styles.sentMessageBubble : styles.receivedMessageBubble]}>
              <Text style={[styles.messageText, item.sent && styles.sentMessageText]}>{item.text}</Text>
              <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
            {item.sent && (
              <Image
                source={{ uri: 'https://example.com/avatar-sent.jpg' }}
                style={styles.avatar}
              />
            )}
          </View>
        )}
        contentContainerStyle={styles.chatContainer}
      />

      {/* Input Field and Send Button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#b0bec5" // Light grey placeholder
          value={newMessage}
          onChangeText={text => setNewMessage(text)}
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          {loading ? <ActivityIndicator size="small" color="#ffffff" /> : <Text style={styles.sendButtonText}>Send</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1', // Light medical-themed background color
  },
  chatContainer: {
    padding: 10,
    paddingBottom: 80, // Leave space for input
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 5,
  },
  sentMessageContainer: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  receivedMessageContainer: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  messageBubble: {
    maxWidth: '75%',
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
    position: 'relative',
  },
  receivedMessageBubble: {
    backgroundColor: '#c8e6c9', // Light green for received messages
    borderTopLeftRadius: 0,
  },
  sentMessageBubble: {
    backgroundColor: '#ffccbc', // Light red/pink for sent messages
    borderTopRightRadius: 0,
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 16,
    color: '#004d40', // Dark green text for both message types
  },
  sentMessageText: {
    color: '#000000', // Dark text for sent messages
  },
  timestamp: {
    fontSize: 12,
    color: '#00796b', // Light green for timestamp
    marginTop: 5,
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#004d40', // Dark green border color
    backgroundColor: '#ffffff', // Light background for input area
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#004d40', // Dark green border color
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    color: '#004d40', // Dark green text for input
  },
  sendButton: {
    backgroundColor: '#004d40', // Dark green button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 5,
  },
});

export default Chatting;
