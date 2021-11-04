import { registerRootComponent } from 'expo';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Wrapper ({children}) {
    return (
        <View style = {style.wrapper}>{children}</View>
    )
}

const style = StyleSheet.create({
    wrapper: {
        backgroundColor: '#181924',
        flex: 1,
        height: '100%',
    }

})