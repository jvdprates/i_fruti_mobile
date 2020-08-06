import React, {useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

import * as Permissions from 'expo-permissions';

export default function App() {

  useEffect(() => {
    const getPermission = async function(){
      await Permissions.askAsync(Permissions.LOCATION);
    }
    getPermission();
  }, [])
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
    paddingTop: 20,
    backgroundColor: '#0e8512',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
