import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import fakeData from "../fakeData"
import Card from './Card';

const Shop = () => {

    const [Data, setData] = useState(fakeData.slice(1,20))

 
    
    return (
       <ScrollView>
           <View style={styles.ShopContainer}>

            {
                Data.map(pd=><Card product={pd}></Card>)
            }


           </View>
       </ScrollView>
    );
};
const styles = StyleSheet.create({
    ShopContainer: {
      width:"90%",
      display:"flex",
      flexWrap:'wrap',
      flexDirection:'row',
      justifyContent:"center",
      marginLeft:"auto",
      marginRight:"auto",
    
     
    },
  });
  
  

export default Shop;