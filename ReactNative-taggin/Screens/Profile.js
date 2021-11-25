import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet,Button, TextInput, TextInputComponent,ScrollView, TouchableOpacity, View, Text, Image, Pressable } from 'react-native';

const Profile = ({navigation, route}) => {
    return ( 
        <SafeAreaView style={styles.container}>
            <Text style={{textAlign: 'center'}}>
                This is my profile.
            </Text>
            <Text style={{textAlign: 'center'}}>
                {route.params.username}
            </Text>
            <Button onClick={()=> {navigation.navigate("Login")}} title={"Logout"} />
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