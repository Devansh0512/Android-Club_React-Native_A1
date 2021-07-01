/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle} >Assignment-1</Text>
      <Text style={styles.sectionDescription}>Getting Started with React native.</Text>
      <Text style={styles.innerText}> This is an example of red color text.</Text>
      <Text style={styles.innerText1}> This is an example of green color text.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  innerText: {
    color:'red',
    fontSize:18,
    fontWeight:'400',
  },
  innerText1: {
    color:'green',
    fontSize:18,
    fontWeight:'400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
