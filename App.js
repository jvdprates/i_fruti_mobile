import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.content}>
      <WebView source={{ uri: 'https://ifruti.com.br' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
