import React, { Component } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default Mappy = () =>{
    return (
        <SafeAreaView style = {{flex: 1}}>
        <View style = {{flex: .07}}>
            <Text style = {{
                fontSize: 44,
                textAlign: 'center',

            }}>This is a map! Swipe here.</Text>
        </View>
        <View style = {{flex: .93}}>
            <MapView
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation
                initialRegion={{
                latitude: 40.712776,
                longitude: -74.005974,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421}}
            />
      </View>
      </SafeAreaView>
    );
  
}