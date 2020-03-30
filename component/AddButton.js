import React, { Component } from 'react'
import { Text, View, StyleSheet, Animated } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { FontAwesome5, Feather } from '@expo/vector-icons'


export default class AddButton extends React.Component {
    buttonSize = new Animated.Value(1)
    mode = new Animated.Value(0)

    buttonPress = () => {
        Animated.sequence([
            Animated.timing(this.buttonSize, {
                toValue: 0.95,
                duration: 30,
            }),
            Animated.timing(this.buttonSize, {
                toValue: 1,
            }),
            Animated.timing(this.mode, {
                toValue: this.mode._value === 0 ? 1 : 0
            })
        ]).start();
    };
    render() {
        const sizeStyle = {
            transform: [{
                scale: this.buttonSize
            }]
        }
        const rotation = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"],
        })
        const searchX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [5, -75],
        })
        const searchY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-15, -50],
        })
        const bellX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [5, 10],
        })
        const bellY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-15, -90],
        })
        const boltX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [5, 95],
        })
        const boltY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-15, -50],
        })
        return (
            <View style={{ position: "absolute", alignItems: "center" }}>
                <Animated.View style={{ position: "absolute", left: searchX, top: searchY }}>
                    <View style={styles.secondbtn}>
                        <FontAwesome5 name="heart" size={20} color="#fff" />
                    </View>
                </Animated.View>
                <Animated.View style={{ position: "absolute", left: bellX, top: bellY }}>
                    <View style={styles.secondbtn}>
                        <FontAwesome5 name="bell" size={20} color="#fff" />
                    </View>
                </Animated.View>
                <Animated.View style={{ position: "absolute", left: boltX, top: boltY }}>
                    <View style={styles.secondbtn}>
                        <FontAwesome5 name="bolt" size={20} color="#fff" />
                    </View>
                </Animated.View>

                <Animated.View style={[styles.button, sizeStyle]}>
                    <TouchableHighlight onPress={this.buttonPress} underlayColor="#7f58ff">
                        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                            <FontAwesome5 name="plus" size={24} color="#fff" />
                        </Animated.View>
                    </TouchableHighlight>
                </Animated.View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#7f58ff",
        alignItems: "center",
        justifyContent: "center",
        height: 72,
        width: 72,
        borderRadius: 36,
        top: -25,
        elevation: 5,
        shadowColor: "#7f58ff",
        shadowOffset: { height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        borderWidth: 2,
        borderColor: "#fff",
    },
    secondbtn: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        height: 46,
        width: 46,
        borderRadius: 23,
        elevation: 5,
        shadowColor: "#7f58ff",
        shadowOffset: { height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        borderWidth: 0.8,
        borderColor: "#fff",
        backgroundColor: "#7f58ff",

    },


});