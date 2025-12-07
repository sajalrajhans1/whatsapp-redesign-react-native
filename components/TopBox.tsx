import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function TopBox() {
  const contacts = [
    {
      id: 1,
      name: 'John',
      avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
      lastSeen: 'online',
    },
    {
      id: 2,
      name: 'Sheril',
      avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a',
      lastSeen: 'last seen today at 3:15 PM',
    },
    {
      id: 3,
      name: 'Mark',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      lastSeen: 'typing...',
    },
    {
      id: 4,
      name: 'Alex',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
      lastSeen: 'last seen yesterday',
    },
    {
      id: 5,
      name: 'Mia',
      avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
      lastSeen: 'online',
    },
    {
      id: 6,
      name: 'Sam',
      avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167',
      lastSeen: 'last seen today at 1:20 PM',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Whatsapp</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {contacts.map(({ id, name, avatar }) => (
          <View key={id} style={styles.userCard}>
            <Image source={{ uri: avatar }} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{name}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
    color: '#ffffffff',
  },
  container: {
  },
  userCard: {
    padding: 8,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 70/2,
    borderColor: '#008000',
    borderWidth: 2,
  },
  userName: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#ffffffff',
  },
});
