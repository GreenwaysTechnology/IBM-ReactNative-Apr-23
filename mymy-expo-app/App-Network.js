import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Network from 'expo-network';

export default function App() {
    const [network, setNetwork] = useState(null)
    useEffect(() => {
        (async () => {
            const ip = await Network.getIpAddressAsync();
            console.log(ip)
            setNetwork(ip)
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Network Module</Text>
            <Text>Ip Address{network}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});