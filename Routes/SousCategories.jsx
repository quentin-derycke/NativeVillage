import { SubCategoriesloader } from "../Data/Apis/categories";
import React, { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";




function DetailsScreen({ route, navigation }) {
  const categoryId = route.params
  const [category, setCategory] = useState([])
  const [subCategories, setSubCategories] = useState([])

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

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{category.name}</Text>
      {subCategories.map((subCategory) => (
        <Button
          title={subCategory.name}
        />
      ))}

    </View>
  );
}

export default DetailsScreen