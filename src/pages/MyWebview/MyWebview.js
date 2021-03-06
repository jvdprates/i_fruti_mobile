import React from 'react';

import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';

import styles from "./MyWebviewStyle";

export default function MyWebview({uri}) {
    return (
        <View style={styles.content}>
            <WebView source={{ uri: uri}} originWhitelist={[uri]}/>
            <StatusBar style='light' />
        </View>
    );
}