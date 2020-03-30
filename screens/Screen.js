import React from 'react'
import { View, StatusBar } from 'react-native'

export default Screen = (color1) => (
    <View style={{ flex: 1, backgroundColor: "#161924" }}>
        <StatusBar barStyle="light-content" />
    </View>
);