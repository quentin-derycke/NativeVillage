import { SubCategoriesloader } from "../Data/Apis/categories";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
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

  useEffect(() => {
    SubCategoriesloader(categoryId.categoryId).then((category) =>
      setCategory(category)
    );
  }, []);

  useEffect(() => {
    SubCategoriesloader(categoryId.categoryId).then((category) =>
      setSubCategories(category.parent)
    );
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>{category.name}</Text>
        <View style={styles.row}>
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
                <Text>{subCategory.name}</Text>
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
    alignItems: "center",
  },
  card: {
    height: 200,
    width: "100%",
    backgroundColor: "#F9F9FE",
    justifyContent: "center", //Centered vertically
    alignItems: "center", // Centered horizontally
    margin: 12,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8
  },
});
export default DetailsScreen;
