import { Categoriesloader } from "../Data/Apis/categories";
import React, { useEffect, useState } from "react";
import {  Text, View, Button } from "react-native";


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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      {categories.map((category) => (
        <Button
          title={category.name}
          onPress={() => {
            navigation.navigate("Details");
          }}
        />
      ))}
    </View>
  );
}

export default HomeScreen;
