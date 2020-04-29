import React, { Component } from 'react'
import { View, StatusBar, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity,AsyncStorage } from 'react-native'
import * as Facebook from 'expo-facebook'
import * as GoogleSignIn from 'expo-google-sign-in';
import { Icon } from 'react-native-elements';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Title,
  Right,
  Grid,
  Row,
  Button,
  Text,
  Form,
  Item,
  Input,
  Label,
  H2
} from 'native-base'
import WishList from './WishList';


export default class SignupScreen extends Component {
constructor()
{

super();
this.state = {
    securePassword: true,
    Username:'',
    User_profile:''
  }
  
}
  componentDidMount() {
    this.initAsync();
  }

  _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    this.setState({ user });
  };

  initAsync = async () => {
    await GoogleSignIn.initAsync({
      // You may ommit the clientId when the firebase `googleServicesFile` is configured
      clientId: '<YOUR_IOS_CLIENT_ID>',
    });
    this._syncUserWithStateAsync();
  };

  LoginWithFaceebook = async () => {
    try {
      await Facebook.initializeAsync('677274316402922');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        console.log("success", type)
        // Get the user's name using Facebook's Graph API
      
        fetch('https://graph.facebook.com/v2.5/me?fields=email,name,picture,friends&access_token=' + token)
        .then((response) => response.json())
        .then((json) => {
          this.setState({Username:json.name,User_profile:json.picture.data.url})
     if(json)
     {

       try {
         AsyncStorage.setItem("userinfo",JSON.stringify(json))
         this.props.navigation.navigate('Drawer')
        } catch (e) {
          
          alert(e.message)
        }
        
        
      }
        // Some user object has been set up somewhere, build that user here
          
        }).catch((err) => {

           alert(err.message)
        })
     
      
      } 
      
      
      
      else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  LoginWithGmail = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        this._syncUserWithStateAsync();
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  }


  changePasswordSecure() {
    securePassword = this.state.securePassword
    this.setState({ securePassword: !securePassword })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }} behavior="padding" enabled >
          <Grid>
            <Row size={25}>
              <View style={styles.logoWrapper}>
                {/* <Image square style={styles.logo} source={logo} /> */}
              </View>
            </Row>
            <Row size={75}>
              <View style={styles.formWrapper}>

                {/* <H2 style={styles.formTitle}>Hi! Please Signup Below! </H2> */}
                <Form>
                  <Item style={{ marginBottom: 15 }}>
                    <Input placeholder="First Name" autoFocus={true}
                    />
                  </Item>

                  <Item style={{ marginBottom: 15 }}>
                    <Input placeholder="Last Name" ref={(input) => { this.textInput = input }} />
                  </Item>

                  <Item style={{ marginBottom: 15 }}>
                    <Input placeholder="Email Address" keyboardType="email-address" />
                  </Item>

                  <Item last>
                    <Input placeholder="Create Password" secureTextEntry={this.state.securePassword} />
                    <Button dark transparent
                      onPress={() => this.changePasswordSecure()}>
                      <Icon active name='ios-eye' type="ionicon" />
                    </Button>
                  </Item>

                  <View>

                  </View>
                  <Button onPress={() => navigate('Signin')} full style={{ marginTop: 5, backgroundColor: 'green' }}>
                    <Text style={{ fontWeight: '100' }} >Sign Up</Text>
                  </Button>


                  <View>
                    <TouchableOpacity onPress={this.LoginWithFaceebook} style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>

                      <Text full style={styles.facebook}>loginwithFacebook
</Text>
                    </TouchableOpacity>
                  </View>


                  <View>

                    <TouchableOpacity onPress={this.LoginWithGmail}>
                      <Text full style={styles.gmail}>loginwithGmail
</Text>
                    </TouchableOpacity>
                  </View>
                </Form>
              </View>
            </Row>
          </Grid>

        </KeyboardAvoidingView>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 100,

  },
  logoWrapper: {
    flex: 1,
    backgroundColor: '#29c137',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formWrapper: {
    padding: 20,
    flex: 1
  },
  formTitle: {
    textAlign: "center",
    marginBottom: 20,
    color: "#828282"
  },
  facebook:
  {
    borderWidth: 2,
    borderColor: '#0164E1',
    backgroundColor: '#0164E1',
    color: 'white',
    textAlign: 'center',
    padding: 8,
    top: 13,
    width: '100%'


  },
  gmail:
  {
    borderWidth: 2,
    borderColor: '#B23121',
    backgroundColor: '#B23121',
    color: 'white',
    textAlign: 'center',
    padding: 8,
    top: 30


  },


})

