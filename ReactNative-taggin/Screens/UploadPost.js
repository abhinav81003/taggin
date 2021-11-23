import React, {useState, useEffect, useReducer} from 'react';
import { SafeAreaView, StyleSheet, TextInput, TextInputComponent,ScrollView, TouchableOpacity, View, Text, Image, Pressable,Button } from 'react-native';
import axios from 'axios';
import colors from '../assets/colors';


const Profile = ({navigation}) => {
    //all the variables about data to be posted
    const [title, setTitle] =useState("");
    const [description, setDescription] = useState("");
    const [userID,setUserID] = useState(""); //fetch from user's data

    //temporary user selection
    const users = ["monkeysnest", "danielheeee", "smellysocks"]
    const [selectedUser, setSelectedUser] = useState([false,false,false])
    const HandleSelectingUser = (index) => {
        var selections = selectedUser;
        selections[index] = !selections[index];
        setSelectedUser(selections);
        setUserID(users[index]);
        forceUpdate();
    }
    //tags and selecting them
    const tags = ["#USC", "#Parkside", "#CSMajor"] //change this to fetching from the users data
    const [selectedTags, setSelectedTags] = useState([false,false,false])
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const HandleSelectingTag = (index) => {
        var selections = selectedTags;
        selections[index] = !selections[index];
        setSelectedTags(selections);
        setDescription(tags[index])
        forceUpdate();
    }

    //for the upload button on the top right
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: ()=> (
              <Button onPress ={() => {HandleUpload();}} title= {"Upload"}>
                  
              </Button>
          ),
        });
    })
    const HandleUpload = () => {

    }
    return ( 
        <View style={styles.container}>
            <Text  style={styles.heading}>
            </Text>
            <TextInput style = {styles.inputBox}
                placeholder = "Your thought"
                multiline = {true}
            />
            <View style={styles.tagBar}>
                <Text style={styles.tagsTextHead}>
                    Tags:
                </Text>
                {tags.map((tag, index) => {
                    return(
                    <TouchableOpacity key={index} 
                                      style={[styles.tag, {backgroundColor: selectedTags[index]? colors.secondary : colors.sixth}]}
                                      onPress = { () => HandleSelectingTag(index)}>
                        <Text style={{color:  selectedTags[index]? "white":"black"}}>
                            {tag}
                        </Text>
                    </TouchableOpacity>
                    );
                })}
            </View>
            <View style={styles.userBox}>
                <Text style={styles.tagsTextHead}> Select User </Text>
                <View style={styles.userNameBox}>
                {users.map((user, index) => {
                    return(
                    <TouchableOpacity key={index} 
                                      style={[styles.tag, {backgroundColor: selectedUser[index]? colors.third : colors.primary}]}
                                      onPress = { () => HandleSelectingUser(index)}>
                        <Text style={{color:  selectedUser[index]? "white":"black"}}>
                            {user}
                        </Text>
                    </TouchableOpacity>
                    );
                })}
                </View>
            </View>
        </View>
     );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    heading : {
        fontSize: 17
    },
    inputBox: {
        width: "90%",
        height: "42%",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        textAlignVertical: 'top',
    },
    tagBar: {
        width: "120%",
        height: "7%",
        paddingHorizontal: "15%",
        borderWidth: 1,
        borderColor: "lightgrey",
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection:'row',
    },
    tagsTextHead: {
        fontWeight: '600',
        marginRight: 7
    },  
    tag:{
        borderRadius: 10,
        minWidth: "15%",
        margin: 4,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userBox: {
        padding: 10,
        margin: 5,
        flexDirection: 'column',
        alignItems: 'center'
    },
    userNameBox: {
        flexDirection: 'row',
        margin: 20,
    },
})
export default Profile;