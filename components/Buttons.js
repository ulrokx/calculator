import React, { useState }  from 'react';
import{ StyleSheet, View, TouchableOpacity, Text} from 'react-native';

export default function Buttons ({value, onPress, sign, toDo}) { 
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    if(value === "=") {
        buttonStyles.push(styles.equal)
        textStyles.push(styles.wideButtonText)
        buttonStyles.push(styles.wideButton)
    } else if(value === "." || value === "+-") {
        buttonStyles.push(styles.crow)
    } else if(value === "/" || value === "X" || value === "-" || value ==="+") {
        buttonStyles.push(styles.signs)
    }
    if(value === "C"){
        textStyles.push(styles.wideButtonText)
    } 
    if(value ==="C") {
        buttonStyles.push(styles.wideButton)
        buttonStyles.push(styles.clearcolor)
    } 
    if(sign && value == toDo) {
        buttonStyles.push(styles.signOn)
    }
    return (
        <TouchableOpacity
            style = {buttonStyles}
            onPress = {onPress}
        >
            <Text style = {textStyles}>{value}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#494c66',
        flexBasis: '23%',
        flex: 1,
        height:'19%',
        borderRadius: 90,
        margin: 2
    },
    text: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingVertical: '25%',
    },
    equal: {
        backgroundColor: '#5eab94',
    },
    crow: {
        backgroundColor: '#5e96ab',
    },
    wideButtonText: {
        paddingVertical: '14%',
    },
    signs: {
        backgroundColor:  '#7a5eab',
    },
    wideButton: {
        flexBasis: '48%',
    },
    clearcolor: {
        backgroundColor: '#ab5e8f'
    },
    signOn: {
        backgroundColor: '#90ab5e'
    }

})