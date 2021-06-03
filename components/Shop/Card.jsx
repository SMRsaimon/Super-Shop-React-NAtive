import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const Card = ({ product }) => {
  const { key, category, name, price, img } = product;



  const onPressLearnMore = () => {};
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: img,
          }}
        />
      </View>

      <Text style={{marginTop:10, marginBottom:10}}>{name.slice(0, 30)}</Text>
      <Text style={{fontSize:18, fontWeight:600, marginBottom:10}}>Price :  ${price}</Text>
      <Button
        onPress={onPressLearnMore}
        title="Buy Now"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    width: 150,
    marginLeft: 10,
    padding: 10,
    marginBottom: 10,
    height: 270,
    borderWidth: 1,
    borderColor: "gray",
  },
  tinyLogo: {
    width: 80,
    height: 80,
    marginLeft:"auto",
    marginRight:"auto"
  },
  imgContainer: {
    width: "100%",
    borderWidth:1,
    borderBottomColor:"gray",
    padding:10,
    marginBottom:5
    
  },
});

export default Card;
