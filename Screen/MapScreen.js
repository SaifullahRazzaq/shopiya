import MapView, { Marker, AnimatedRegion } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React, { Component } from 'react';
import RNGooglePlaces from 'react-native-google-places';
import { View, Text, TextInput, Dimensions, StyleSheet, PermissionsAndroid, Modal,Image, TouchableOpacity, TouchableWithoutFeedback, Button, KeyboardAvoidingView } from 'react-native';
// import Geolocation from '@react-native-community/geolocation';
import * as Location from 'expo-location';
import { SearchBar, Header, Icon } from 'react-native-elements'
// import Geocoder from 'react-native-geocoding';

const width=Dimensions.get('screen').width;
const height=Dimensions.get('screen').height;
export default class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            longitude: 15.45,
            latitude: 50.44,
            address: '',
            showButton: true,
            modalVisible: false,
            text:'',
            places:[],
            value:'',
            search:'',
            flag:false,
            user_id:''


        }
    }
    async componentDidMount() {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          alert('Permission to access location was denied');
        }
  
        let location = await Location.getCurrentPositionAsync({});
        this.setState({longitude:location.coords.latitude,latitude:location.coords.latitude})


    }

    updateSearch = (search) =>
    {
        this.setState({search:search})

        RNGooglePlaces.getAutocompletePredictions(search,{
        })
            .then((place) => {
                console.log("places===>",place)
                // this.setState({places:place,flag:true})
                
                // console.log("place=========>", place)
                // this.setState({

                //     latitude: place.location.latitude,
                //     longitude: place.location.longitude,
                //     address: place.address

                // })

            })
            .catch(error => console.log(error.message));
    

    }
        
    
  render() {
    var mapStyle=[{"elementType": "geometry", "stylers": [{"color": "lightgreen"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#000B3E"}]},{"elementType": "labels.text.stroke","stylers": [{"color": "#ebeaea"}]},{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#00a79d"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#00a79d"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#41bf34"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#1f7a34"}]},{"featureType": "road","elementType": "geometry","stylers": [{"color": "#dbdbdb"}]},{"featureType": "road","elementType": "geometry.stroke","stylers": [{"color": "#ffffff"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#051429"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#ed7431"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#ffffff"}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#0d0632"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#fff61f"}]},{"featureType": "transit.station","elementType": "labels.text.fill","stylers": [{"color": "#00a79d"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#80c5de"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#515c6d"}]},{"featureType": "water","elementType": "labels.text.stroke","stylers": [{"color": "#80c5de"}]}];

    return (

        <View style={styles.container}>

        <View style={{ width: '100%', height: '95%' }}>
            <MapView zoomEnabled={true}
               showsMyLocationButton={true}
               followsUserLocation={true}
               style={styles.map}
               region={{
                   
                   latitude:this.state.latitude,
                   longitude: this.state.longitude,
                   latitudeDelta: 0.015,
                   longitudeDelta: 0.0121
                   
                }}
                customMapStyle={mapStyle}
                
>

                <Marker draggable onDragEnd={(item) =>console.log("drag========>",item)} coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }} description={this.state.search}>
        <Image source={require('../Icon/marker.png')} style={{height:40, width:40  }} />
                
        
                </Marker>
     
            </MapView>
            <View style={{ flex: 1, justifyContent: 'flex-start'}} >
            <SearchBar platform="android"
  noIcon
  onChangeText={this.updateSearch}
  value={this.state.search}
  placeholder='Search Here...' />

  </View>
                  
                        </View>


                        <View style={styles.Button}>
                            <Button title="Goto" color="green" onPress={()=>{this.props.navigation.navigate('Drawer')}}/>
                        </View>


</View>
    );
}
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      width:width,
      height:height
  },
map: {
    ...StyleSheet.absoluteFillObject,
},
Button:
{
    flex:1,
    justifyContent:'flex-end',
}
});