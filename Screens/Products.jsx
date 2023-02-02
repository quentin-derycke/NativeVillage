import { Text, View, Button, Pressable, StyleSheet, ScrollView, Image } from "react-native";

import Card from "../components/Card";

function ProductsScreen({ route, navigation }) {
  const products = route.params.subCategoryProducts;
  console.log(products);

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titleText}>{route.params.subCategoryName}</Text>
      <View>
      {products.map((product, index) => (
        <Pressable key={index} 
         onPress={() => {
          navigation.navigate("Product", 
          {
            product : product
          })
         }}>
          <Card style={styles.card}>
          <Image style={styles.image} source={{ uri : `https://quentin.amorce.org${product.image[0].path}`}} />
            <Text>{product.name}</Text>
            <Text>{product.price}</Text>
          </Card>
        </Pressable>
      ))}
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    JustifyContent: "center",
    alignsItems: "center",
  },
  card: {
    height: 200,
    width: 380,
    maxWidth: "100%",
    backgroundColor: "#F9F9FE",
    justifyContent: "space-around", 
    alignItems: "center", // Centered horizontally
    flexDirection: "row",
    margin: 4,
  }, 
   titleText: {
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 26,
    textAlign: 'center',

  },
  image : {
    height : 100,
    width: 100
  }
});

export default ProductsScreen;
