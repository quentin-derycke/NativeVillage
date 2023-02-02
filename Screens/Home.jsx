import { Categoriesloader } from "../Data/Apis/categories";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Button,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
  ImageBackground 
} from "react-native";

import Card from "../components/Card";


function HomeScreen({ navigation }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Categoriesloader().then((categories) =>
      setCategories(
        categories.filter(
          (category) => category.parent && category.parent.length > 0
        )
      )
    );
  }, []);

  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Green Village</Text>
        <View style={styles.row}>
          {categories.map((category, index) => (
            <Pressable
              style={styles.card}
              key={index}
              onPress={() => {
                navigation.navigate("Details", {
                  categoryId: category.id,
                  categoryName: category.name,
                });
              }}
            >
              <Card style={styles.card} key={index}>
                <ImageBackground
                  style={styles.images}
                  source={{ uri: `https://quentin.amorce.org${category.Image.path}`}}
                >
                  <Text style={styles.categoryText}>{category.name}</Text>
                </ImageBackground>
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
  
  titleText: {
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 26,
  },
  categoryText: {
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 26,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0A0C6A",
    backgroundColor: "#AEAFF8c0",
    borderRadius: 10,
  },
  card: {
    height: 400,
    width: 300,
    backgroundColor: "#F9F9FE",
    justifyContent: "center", //Centered vertically
    alignItems: "center", // Centered horizontally
    margin: 12,
  },
  images: {
    width: "100%",
    height: 300,
    justifyContent: "center", //Centered vertically
    alignItems: "center", // Centered horizontally
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8
  },
});

export default HomeScreen;
