import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NotesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reflection</Text>

      <Text style={styles.h}>1) Why is this better as a mobile app feature than a web app feature?</Text>
      <Text style={styles.p}>
        Image picking feels more natural on mobile because users keep photos on their phone and can instantly choose from their
        camera roll. Mobile permission prompts are built into the OS, so the flow is quick and familiar for users.
      </Text>

      <Text style={styles.h}>2) What breaks if permission is denied?</Text>
      <Text style={styles.p}>
        If photo library permission is denied, the image picker cannot open and no images can be selected. In this app, the user
        sees an alert and the Add Image action stops safely.
      </Text>

      <Text style={styles.h}>3) How could this become part of your Final Project?</Text>
      <Text style={styles.p}>
        I could use this feature to let users attach photos to posts, reports, or profile updates in my final app. The same
        pattern (request permission, pick image, preview, and optionally remove) can plug directly into a create/edit screen.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 12 },
  h: { fontSize: 18, fontWeight: '700', marginTop: 16, marginBottom: 6 },
  p: { fontSize: 16, lineHeight: 22 },
});