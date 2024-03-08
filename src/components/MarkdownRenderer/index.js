import React from 'react';
import {View, StyleSheet} from 'react-native';
import Markdown from 'react-native-markdown-display';

const MarkdownRenderer = (props) => {
  const { markdownText, textColor, fontSize } = props

  const markdownStyles = {
    // Bold text
    strong: {fontWeight: 'bold'},
  
    // Italic text
    em: {fontStyle: 'italic'},
  
    // Bold and italic
    s: {fontWeight: 'bold', fontStyle: 'italic'}, // Adjust based on your Markdown renderer
  
    // Headings
    heading1: {fontSize: 32, fontWeight: 'bold'},
    heading2: {fontSize: 28, fontWeight: 'bold'},
    heading3: {fontSize: 24, fontWeight: 'bold'},
    heading4: {fontSize: 20, fontWeight: 'bold'},
    heading5: {fontSize: 18, fontWeight: 'bold'},
    heading6: {fontSize: 16, fontWeight: 'bold'},
  
    // Links
    link: {color: 'blue', textDecorationLine: 'underline'},
  
    // Text
    body: {fontSize: fontSize, color: textColor}, 
    // text: {fontSize: fontSize, color: textColor}, // Default text style
  
    // Lists
    bullet_list: {}, // Style for unordered list container
    ordered_list: {}, // Style for ordered list container
    list_item: { flexDirection: 'row', alignItems: 'flex-start' },

    // Blockquotes
    blockquote: {backgroundColor: '#f9f9f9', borderLeftWidth: 5, borderLeftColor: '#ccc', paddingLeft: 10},
  
    // Code
    code_inline: {backgroundColor: '#f5f5f5', fontFamily: 'monospace'},
    code_block: {backgroundColor: '#f5f5f5', fontFamily: 'monospace'},
  
    // Images
    image: {width: 100, height: 100}, 
  
    // Tables (if supported)
    table: { borderWidth: 1, borderColor: '#444' }, 
    thead: {}, 
    tbody: {}, 
    th: { fontWeight: 'bold', padding: 8, borderWidth: 1, borderColor: '#444' }, 
    tr: {}, 
    td: { padding: 8, borderWidth: 1, borderColor: '#444' }, 
  
    // Additional custom styles as needed
  };
  

  return (
    <View style={styles.container}>
      <Markdown style={markdownStyles}>{markdownText}</Markdown>
    </View>
  );
};

// const markdownStylesTwo = {
//   text: {
//     fontSize: fontSize,
//     color: 'blue', 
//     fontWeight: 'normal'
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default MarkdownRenderer;
