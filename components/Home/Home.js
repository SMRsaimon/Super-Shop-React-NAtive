import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Home = () => {
    return (
        <View style={styles.Navigation}>
            <Text style={styles.link} >Home</Text>  <Text style={styles.link} >Shop </Text><Text style={styles.link} >Order History </Text>
        </View>
    );
};

const styles = StyleSheet.create({

    Navigation: {

        display: "flex",
        flexDirection: "row",
        padding: 10,
        justifyContent: 'center',
        backgroundColor: "#ff4880",
        marginBottom: 20,
    }
    ,
    link: {
        padding: 10,
        color: "white",
        cursor: "pointer",
        fontWeight: 700
    }
})


export default Home;