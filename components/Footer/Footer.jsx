import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <Text style={{textAlign:"center"}}>Copy Right 2021|| All Right Reserved Team-58</Text>
        </View>
    );
};


const styles=StyleSheet.create({

    footerContainer:{
        width:"100%",
        padding:30,
        display:"flex",
        backgroundColor:"rgb(132, 21, 132)",
        justifyContent:"center"


    }
})
export default Footer;