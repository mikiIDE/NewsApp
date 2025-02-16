import React from "react";
import { View, Text, StyleSheet, Image} from "react-native"

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.fontBox}>
                    <Text style={styles.text}>大阪</Text>
                </View>

                <View style={styles.imageBox}>
                    <Image
                    style={{width: 70, height: 70}}
                    source={{ url : "ttps://picsum.photos/d/599/200/300" }}
                    />
                </View>
            </View>
        </View>
    )
}
