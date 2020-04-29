import React from 'react';
import { View, Text, Image, ImageBackground, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';




class SplashScreen extends React.Component {
  constructor()
  {
    super();
    this.state=
    {
      loading: true
    }
  }
  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        5000
      )
    )
  }

  async componentDidMount() {
      await Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      })
      this.setState({ loading: false })
    
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
   this.props.navigation.navigate('Signup')
    }
  }


  render() {
    if (this.state.loading) {
      return (
        <View></View>
      );
    }
    return (

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',height:Dimensions.get('window').height/1,width:Dimensions.get('window').width,backgroundColor:'green'}}>
   <Icon 
  name="truck-fast"
  type='material-community'
  color='white'
  size={150}
/>
        </View>
      );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000B3E'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
}

export default SplashScreen;