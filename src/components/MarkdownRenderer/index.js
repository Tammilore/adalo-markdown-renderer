import React from 'react';
import {View, StyleSheet} from 'react-native';
import Markdown from 'react-native-markdown-display';

const MarkdownRenderer = (props) => {
  const { markdownText } = props

  return (
    <View style={styles.container}>
      <Markdown style={markdownStyles}>{markdownText}</Markdown>
    </View>
  );
};

const markdownStyles = {
  text: {
    fontSize: 16,
    color: 'white', 
    fontWeight: 'normal',
    fontFamily: 'Karla',
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default MarkdownRenderer;
