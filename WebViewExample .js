import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
const WebViewExample = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: 'https://app.dropshipaja.com/login.php',
        }}
      />
    </View>
  );
};
export default WebViewExample;

const styles = StyleSheet.create({
  container: {
    height: 750,
  },
});
