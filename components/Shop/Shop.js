import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import fakeData from "../fakeData/laptop";
import Card from "./Card";

const Shop = () => {
  const [Data, setData] = useState(fakeData);

  console.log(fakeData)
  return (
    <ScrollView>
      <View style={styles.ShopContainer}>
        {Data.map((pd) => (
          <Card product={pd}></Card>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  ShopContainer: {
    width: "90%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default Shop;
