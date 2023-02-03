import { SubCategoryloader } from "../Data/Apis/categories";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Button,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import Card from "../components/Card";

function DetailsScreen({ route, navigation }) {
  const categoryId = route.params;
  const [category, setCategory] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    SubCategoryloader(categoryId.categoryId).then((category) =>
      setCategory(category)
    );
  }, []);

  useEffect(() => {
    SubCategoryloader(categoryId.categoryId).then((category) => {
      setSubCategories(category.parent)
   setLoading(false)});
  }, []);

  return (
    
      <View style={styles.container}>
        <Text style={styles.titleText}>{category.name}</Text>
        <ScrollView horizontal={true}>
        { loading ? (     <ActivityIndicator style={styles.indicator} size="large" />
) : (
        <View style={styles.row} >
          {subCategories.map((subCategory, index) => (
            <Pressable
              onPress={() => {
                navigation.navigate("Products", {
                  subCategoryId: subCategory.id,
                  subCategoryName: subCategory.name,
                  subCategoryProducts: subCategory.products,
                });
              }}
            >
              <Card style={styles.card} key={index}>
                <Text style={styles.categoryText}>{subCategory.name}</Text>
              </Card>
            </Pressable>
          ))}
        </View>
        )}
        </ScrollView>
      </View>
   
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    JustifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 400,
    width: 300,
    maxWidth:"100%",
    backgroundColor: "#F9F9FE",
    justifyContent: "center", //Centered vertically
    alignItems: "center", // Centered horizontally
    margin: 12,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 26,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0A0C6A",
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,

  },
  titleText: {
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 26,
    textAlign: 'center',

  },
  indicator: {
    flex: 1
  }

});
export default DetailsScreen;
