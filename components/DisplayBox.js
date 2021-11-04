import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { AutoSizeText, ResizeTextMode } from 'react-native-auto-size-text';
export default function DisplayBox (props) {
  return (
    <View style = {styles.display}>
      <AutoSizeText
        numberOfLines = {1}
        fontSize = {120}
        style = {styles.text}
        mode = {ResizeTextMode.max_lines}
        >
          {props.value}
        </AutoSizeText>
    </View>
  );
}

const styles = StyleSheet.create ({
  display: {
    flex: .25,
    marginHorizontal: '6%',
  },
  text: {
    color: '#c0cccf',
    textAlign: 'right',
    fontWeight: 'bold',
    
  }

})
