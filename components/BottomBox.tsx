import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';

export default function BottomBox() {
  const contacts = [
    {
      id: 1,
      name: 'Priya', // Indian
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      lastMessage: 'Just reached home',
      date: '12:45 PM',
    },
    {
      id: 2,
      name: 'Hassan', // Arab
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce',
      lastMessage: 'Will call soon',
      date: '11:30 AM',
    },
    {
      id: 3,
      name: 'Emma', // European (UK)
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
      lastMessage: 'Sounds good',
      date: 'Yesterday',
    },
    {
      id: 4,
      name: 'Rohan', // Indian
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      lastMessage: 'Let’s meet tomorrow',
      date: 'Yesterday',
    },
    {
      id: 5,
      name: 'Layla', // Arab
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      lastMessage: 'Ok noted',
      date: '2 days ago',
    },
    {
      id: 6,
      name: 'Jonas', // European (Germany)
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg',
      lastMessage: 'Almost there',
      date: '2 days ago',
    },
    {
      id: 7,
      name: 'Aisha', // Arab
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
      lastMessage: 'Thanks!',
      date: '3 days ago',
    },
    {
      id: 8,
      name: 'Ishaan', // Indian
      image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77',
      lastMessage: 'I’ll send it',
      date: '3 days ago',
    },
    {
      id: 9,
      name: 'Nina', // European (Spain)
      image:
        'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg',
      lastMessage: 'Great idea',
      date: 'Last week',
    },
    {
      id: 10,
      name: 'Samaksh', // Arab
      image:
        'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
      lastMessage: 'Message me later',
      date: 'Last week',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <View style={styles.segmentContainer}>
          <Text style={styles.activeSegment}>Chats</Text>
          <Text style={styles.inactiveSegment}>Groups</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {contacts.map(({ id, name, lastMessage, image, date }) => (
          <View key={id} style={styles.secondaryContainer}>
            <Image source={{ uri: image }} style={styles.userImage} />
            <View style={styles.leftBlock}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.lastSeenMessage}>{lastMessage}</Text>
            </View>
            <View style={styles.rightBlock}>
              <Text style={styles.dateText}>{date}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    marginHorizontal: 5,
    borderRadius: 20,
    overflow: 'hidden',
  },
  secondaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastSeenMessage: {
    color: '#555',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  dateText: {
    alignContent: 'flex-end',
    color: '#888',
    fontSize: 12,
  },
  leftBlock: {
    flex: 1,
  },

  rightBlock: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
 headerBox: {
  paddingHorizontal: 16,
  paddingVertical: 12,
  justifyContent: 'center',
  alignItems: 'center',
},

segmentContainer: {
  flexDirection: 'row',
  backgroundColor: '#e9e9e9',
  borderRadius: 20,
  padding: 4,
},

activeSegment: {
  backgroundColor: '#0b5f4f',  // WhatsApp‐green feel
  color: '#fff',
  paddingVertical: 6,
  paddingHorizontal: 18,
  borderRadius: 20,
  fontWeight: 'bold',
},

inactiveSegment: {
  paddingVertical: 6,
  paddingHorizontal: 18,
  borderRadius: 20,
  color: '#777',
}
});
