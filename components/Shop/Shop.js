import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import fakeData from "../fakeData/laptop";
import Card from "./Card";

const Shop = () => {
  const [Data, setData] = useState(fakeData);

  return (
    <ScrollView>
      <View style={styles.ShopContainer}>
        {Data.map((pd) => (
          <Card  key={pd.key} product={pd}></Card>
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
