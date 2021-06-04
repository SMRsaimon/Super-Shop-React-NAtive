import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Home = () => {
    return (
        <View style={styles.textStyle}>
            <Text>
                Welcome, Home Screen
        </Text>
            <TouchableOpacity style={styles.buttonContainerStyle} onPress={() => this.props.navigation.navigate('./Shop')}>
                <Text style={styles.buttonTextStyle}>Open About Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainerStyle: {
        backgroundColor: '#222',
        borderRadius: 5,
        padding: 10,
        margin: 20
    },
    buttonTextStyle: {
        fontSize: 20,
        color: '#fff'
    }
})

export default Home;