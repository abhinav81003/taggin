import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, TextInput, TextInputComponent,ScrollView, TouchableOpacity, View, Text, Image, Pressable } from 'react-native';

const Profile = ({navigation}) => {
    return ( 
        <SafeAreaView style={styles.container}>
            <Text>
                This is my profile.
            </Text>
        </SafeAreaView>
     );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    }
})
export default Profile;