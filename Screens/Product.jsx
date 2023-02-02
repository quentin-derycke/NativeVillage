import { View, StyleSheet, Text, Image } from "react-native"

const ProductScreen = ({ route }) => {

    const product = route.params.product
    console.log(product)

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: `https://quentin.amorce.org${product.image[0].path}` }} />
            <Text style={styles.titleText}>
                {product.name}
            </Text>
            <Text style={styles.titleText}>
                {product.price}
            </Text>
            <Text style={styles.titleText}>
                {product.description}
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
});

export default ProductScreen