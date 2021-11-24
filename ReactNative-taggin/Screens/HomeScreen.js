import React, {useState, useEffect,useReducer} from 'react';
import { Button,Platform, SafeAreaView, StyleSheet, TextInput, TextInputComponent,ScrollView, TouchableOpacity, View, Text, Image, Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../assets/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import MapView from 'react-native-maps';
import { Marker, Callout, Circle, CalloutSubview} from 'react-native-maps';
import axios from 'axios';
import * as Location from 'expo-location';  

var mapStyles = [
    {
        "featureType": "road",
        "stylers": [
            {
                "hue": "#5e00ff"
            },
            {
                "saturation": -79
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "saturation": -78
            },
            {
                "hue": "#6600ff"
            },
            {
                "lightness": -47
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "lightness": 22
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "hue": "#eddded"
            },
            {
                "saturation": -11
            }
        ]
    },
    {},
    {},
    {
        "featureType": "water",
        "stylers": [
            {
                "saturation": -65
            },
            {
                "hue": "#1900ff"
            },
            {
                "lightness": 8
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "weight": 1.3
            },
            {
                "lightness": 30
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#5e00ff"
            },
            {
                "saturation": -16
            }
        ]
    },
    {
        "featureType": "transit.line",
        "stylers": [
            {
                "saturation": -72
            }
        ]
    },
    {}
]

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const Home = ({navigation, route}) => {
    const {width, height} = useDimensions().window;
    const [liked,setLiked] = useState(false);
    const styles = StyleSheet.create({
        map: {
            width: width,
            height: height,
        },
        thought: {
            borderRadius: 10,
            minHeight: 300,
            minWidth: 300,
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        refreshButton: {
            position: 'absolute',
            bottom: 60,
            right:30,
            height: 42,
            width: 42,
            backgroundColor: "white",
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50
        },
        Icon: {
            width: 26,
            height: 26
        },
        uploadButton: {
            position: 'absolute',
            bottom: 120,
            right:30,
            height: 42,
            width: 42,
            backgroundColor: "white",
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50
        },
        profileButton: {
            position: 'absolute',
            top: 60,
            right: 30,
            height: 42,
            width: 42,
            backgroundColor: "white",
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50
        }
    })
    //location getting
    const username = route.params.username;
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);
    var text = "Waiting"
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location);
      }
    //force updating the page

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    //post stuff
    const [posts,setPosts] = useState([{}]);
    //let thoughts = [ { "title": "Village dining sucks", "description": "#usc", "latitude": "34.02007", "longitude": "-118.2878" , "liked": "0", "radius": "100"}, { "title": "Parkside is the best", "description": "#parkside", "latitude":  "34.02569", "longitude": "-118.2848", "liked": "0", "radius": "200"},{ "title": "Just gave my midterm, suffice to say, I'm failing this shit ", "description": "#CS", "latitude":  "34.02059", "longitude": "-118.2950","liked": "0", "radius": "1000"} ];
    
    //refreshing the page
    const [thoughts,setThoughts] = useState([])
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
      setRefreshing(true);
      axios.get('https://fierce-mountain-79115.herokuapp.com/posts')
        .then(function(response){
            console.log(response.data);
            setThoughts(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        }) ;
      wait(2000).then(() => setRefreshing(false));
      }, []);
    
    useEffect(() => {
        axios.get('https://fierce-mountain-79115.herokuapp.com/posts')
        .then(function(response){
            console.log(response.data);
            setThoughts(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    },[])
    const handleRefresh = () => {
        axios.get('https://fierce-mountain-79115.herokuapp.com/posts')
        .then(function(response){
            console.log(response.data);
            setThoughts(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
        onRefresh();
    }
    const handleUpload = () => {
        navigation.navigate("Upload",{loc:location, username: username});
    }
    const handleProfilePress = () => {
        navigation.navigate("Profile", {username: username});
    }
   
    return ( 
    
        <View>
             <MapView style={styles.map} region={{longitude: location != null ? location.coords.longitude: 0,
                        latitude: location != null ? location.coords.latitude: 0,
                        longitudeDelta: 0.002,
                        latitudeDelta: 0.002}} 
                        provider={MapView.PROVIDER_GOOGLE}
                        customMapStyle={mapStyles}>
           
            {thoughts.map((thought,index) => {
            return(
            <View key={index}>
            <Marker 
                coordinate={{latitude: parseFloat(thought.latitude),
                longitude: parseFloat(thought.longitude)}}>
                <Callout  onPress={()=> { setLiked(!liked); forceUpdate();}} >
                    <View style={[styles.thought,{backgroundColor: liked? 'red': 'white'}]}>
                        <Text>
                            {thought.userID}
                        </Text>
                        <Text>
                            {thought.title + " " + thought.description}
                        </Text>
                        <Text>
                            {"Posted at: " + thought.date + " " + thought.time}
                        </Text>
                        <Text>
                            {"Likes " + thought.likes}
                        </Text>
                        {/* <Button onPress={() => console.log("like1")} title ={"Like"}/>  */}
                        <TouchableOpacity>

                        </TouchableOpacity>
                    </View>
                </Callout>
            </Marker>
            <Circle 
                    center={{latitude: parseFloat(thought.latitude),
                    longitude: parseFloat(thought.longitude)}}
                    radius = {parseInt(thought.radius) }
                />
            </View>
            );})}
            </MapView>
            <TouchableOpacity onPress={()=> handleRefresh()} style ={styles.refreshButton}>
                        <Image style={styles.Icon} source={require('../assets/refresh.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> handleUpload()} style ={styles.uploadButton}>
                        <Image style={styles.Icon} source={require('../assets/thought.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> handleProfilePress()} style ={styles.profileButton}>
                        <Image style={styles.Icon} source={require('../assets/profile.png')}/>
            </TouchableOpacity>
        </View>
     );
}

export default Home;