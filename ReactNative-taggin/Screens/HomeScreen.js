import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, TextInput, TextInputComponent,ScrollView, TouchableOpacity, View, Text, Image, Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../assets/colors';
import Slider from '@react-native-community/slider';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import MapView from 'react-native-maps';
import { Marker, Callout, Circle, CalloutSubview} from 'react-native-maps';
import axios from 'axios';

var thoughts = [ { "title": "Village dining sucks", "description": "#usc", "latitude": "34.02007", "longitude": "-118.2878" , "liked": "0", "radius": "100"}, { "title": "Parkside is the best", "description": "#parkside", "latitude":  "34.02569", "longitude": "-118.2848", "liked": "0", "radius": "200"},{ "title": "Just gave my midterm, suffice to say, I'm failing this shit ", "description": "#CS", "latitude":  "34.02059", "longitude": "-118.2950","liked": "0", "radius": "1000"} ]

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

const Home = ({navigation}) => {
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
            bottom: 50,
            right:30,
            height: 40,
            width: 40,
            backgroundColor: "white",
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50
        },
        refreshIcon: {
            width: 20,
            height: 20
        }
    })
    const [posts,setPosts] = useState([{}]);
    const BottomTabs = createBottomTabNavigator();
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);
    useEffect(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
      }, []);

    useEffect(() => {
        axios.get('https://fierce-mountain-79115.herokuapp.com/post')
    })
    return ( 
        <View>
             <MapView style={styles.map} region={{longitude: -118.2850,
                        latitude: 34.0256,
                        longitudeDelta: 0.02,
                        latitudeDelta: 0.02}} 
                        provider={MapView.PROVIDER_GOOGLE}
                        customMapStyle={mapStyles}>
           
            {thoughts.map((thought,index) => {
            return(
            <View key={index}>

            <Marker 
            coordinate={{latitude: parseFloat(thought.latitude),
            longitude: parseFloat(thought.longitude)}}>
                <Callout tooltip onPress={()=> { setLiked(!liked); thought.liked = thoughts.liked === "0"?  "1" : "0"}} >
                    <CalloutSubview style={[styles.thought,{backgroundColor: liked? 'red': 'white'}]}>
                        <Text>
                            {thought.title + " " + thought.description}
                        </Text>
                        <TouchableOpacity>

                        </TouchableOpacity>
                    </CalloutSubview>
                </Callout>
            </Marker>
            <Circle style = {{display: thought.liked !== "0"? 'flex': 'none'}}
                    center={{latitude: parseFloat(thought.latitude),
                    longitude: parseFloat(thought.longitude)}}
                    radius = {parseInt(thought.radius) }
                />
            </View>
            );})}
            </MapView>
            <TouchableOpacity onPress={()=> onRefresh()} style ={styles.refreshButton}>
                        <Image style={styles.refreshIcon} source={require('../assets/refresh.png')}/>
            </TouchableOpacity>
        </View>
     );
}

export default Home;