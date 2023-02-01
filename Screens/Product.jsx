import { Text, View, Button, Pressable, StyleSheet } from "react-native";
;
function ProductsScreen({ route, navigation }) {
const products = route.params.subCategoryProducts

console.log(products)

    return(
        <View style={styles.container}>
            <Text> ProductScreens</Text>
{products.map((product) => (
    <Pressable>
        <Text>{product.name}</Text>
    </Pressable>
))}
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex : 1 ,
        JustifyContent: 'center',
        alignsItems: 'center'
    }
})

export default ProductsScreen