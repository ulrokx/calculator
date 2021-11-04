import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function ButtonTray ({children}) {
    return <View style = {styles.buttontray}>{children}</View>
}

const styles = StyleSheet.create({
    buttontray: {
    flex: .75,
    flexDirection: "row",
    flexWrap: 'wrap',
    height: '100%',
    justifyContent: 'space-between',
    }
})