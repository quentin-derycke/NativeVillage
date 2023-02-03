import { View, StyleSheet, Text, Image, Button, ScrollView, ActivityIndicator } from "react-native"


const ProductScreen = ({ route }) => {

    const product = route.params.product
    console.log(product)

    return (
        <ScrollView>
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: `https://quentin.amorce.org${product.image[0].path}` }} />
            <Text style={styles.titleText}>
                {product.name}
            </Text>
            <Text style={styles.titleText}>
                {product.price}
            </Text>
            <Button color="#4169e1" title="Add to Cart" />
            <Button color='#daa520' style={styles.button} title ="Pay now" />
            <Text style={styles.titleText}>
                {product.description}
            </Text>
        </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        JustifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: 300,
        width: 200
    },
    titleText: {
        fontSize: 26,
        fontWeight: "bold",
        marginVertical: 26,
        textAlign: 'center',

    },
    button: {
        marginVertical: 4
    }
});

export default ProductScreen