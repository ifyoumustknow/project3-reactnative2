import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class LoginScreen extends React.Component {
    state = {
        name: ""
    };

  

    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginTop: 64 }}>
                </View>
                <View style={{ marginHorizontal: 32 }}>
                    <Text style={styles.header}>Username</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Player Name"
                        onChangeText={name => {
                            this.setState({ name });
                        }}
                        value={this.state.name}
                    />
                    <View style={{ alignItems: "flex-end", marginTop: 64 }}>
                        <TouchableOpacity style={styles.continue} onPress={()=>this.props.navigation.navigate('WaitRoom')}>
                        
                            <Ionicons name="md-arrow-round-forward" size={24} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F5F7"
    },

    header: {
        fontWeight: "800",
        fontSize: 30,
        color: "#514E5A",
        marginTop: 32
    },
    input: {
        marginTop: 32,
        height: 50,
        borderColor: "#BAB7C3",
        borderRadius: 30,
        paddingHorizontal: 16,
        color: "#514E5A",
        fontWeight: "600"
    },
    continue: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: "#9075E3",
        alignItems: "center",
        justifyContent: "center"
    }
});
