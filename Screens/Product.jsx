import { View, StyleSheet, Text } from "react-native"

const ProductScreen = ({route}) => {

const product = route.params.product
console.log(product)

    return(
        <View style={styles.container}>
            <Text>
                Products Details
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      JustifyContent: "center",
      alignItems: "center",
    },  
  });

  export default ProductScreen