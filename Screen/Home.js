import React, {Component} from 'react'
import {View, StyleSheet, Dimensions, ScrollView,Image,StatusBar,AsyncStorage} from 'react-native'
import { DrawerActions } from '@react-navigation/native';
import {
  Header,
  Body,
  Container,
  Content,
  Item,
  Input,
  Footer,
  Button,
  Text,
  Title,
  Icon,
  Left,
  Right,
  Card
} from 'native-base'

import {

  Panel,
  Swiper,
  SwiperProductThumb,
  Grid,
  GridProductThumb
} from '../components'

import database from '../database'
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window')


export default class Home extends Component {
  constructor()
  {
    super();
    this.state={
      username:'',
      user_Profile:'',
      flag:false,
      toggle: true
  }

  }
  componentDidMount()
  {
    AsyncStorage.getItem("userinfo").then((value) => {
      let data=JSON.parse(value)
      this.setState({username:data.name,user_Profile:data.picture.data.url})
    })
    }


  renderPromo(data) {
    const {navigate} = this.props.navigation
    return (
      <Panel
        title="Promo"
        description="Today Promo"
        onPressSeeAll={() => this.props.navigation.navigate('ShopScreen')}>
        <Swiper>
          {data.map((item, idx) => {
            return <SwiperProductThumb key={idx} { ...item }/>
          })
          }
        </Swiper>
      </Panel>
    )
  }

  renderCategories(data) {
    return (
      <Panel title="Categories" description="">
        <Grid>
          {data.map((item, id) => {
            return <GridProductThumb key={id} { ...item }/>
          })
          }
        </Grid>
      </Panel>
    )
  }
  toggleTheme() {
    this.setState({
      toggle: this.state.toggle ? false : true
    })
  }

  render() {

    return (
      <Container>
     
     {this.state.flag==false?
          <Header style={{backgroundColor:'green'}} androidStatusBarColor={'green'}>
          <Left>
            <Button transparent >
            <Icon name="menu" color="white"  onPress={()=>this.props.navigation.openDrawer()}></Icon>

            </Button>
          </Left>
          <Body>
            <Title>Grocery UI</Title>
          </Body>
          <Right>
            <TouchableOpacity onPress={()=>{this.setState({flag:true})}}>
            <Button transparent>
              <Icon name="ios-search"/>
            </Button>
            </TouchableOpacity>

            <Button transparent>
              <TouchableOpacity>
              <Icon name="ios-cart"/>
              </TouchableOpacity>
            </Button> 

          
          </Right>

        </Header>
        : <Header searchBar rounded style={{backgroundColor:'green'}} androidStatusBarColor={'green'}   >
        <Item>
          <TouchableOpacity onPress={()=>{this.setState({flag:false})}}>
          <Icon name="ios-search" />
          </TouchableOpacity>
          <Input placeholder="Search" />
          <Icon name="ios-people" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      } 
        <Content>
          <View style={styles.sliderHolder}>
            {/* <Text>Promo Slider</Text> */}
            <Image style={styles.sliderPicture}  source={{ uri: "http://res.cloudinary.com/oklae/image/upload/c_scale,w_500/v1507343728/grocery-app/slider/slider1.png"}}/>
          </View>

          <ScrollView>
            <Card>
              {this.renderPromo(database.promo)}
            </Card>

            <Card>
              {this.renderCategories(database.categories)}
            </Card>
          </ScrollView>

        </Content>
      
      </Container>

    )
  }
}

const styles = StyleSheet.create({
  sliderHolder: {
    // flex:1,
    width: width,
    height: height / 3,
    // backgroundColor: "#CCC",
    alignItems: "center",
    justifyContent: "center"
  },
  sliderPicture:{
    width: width,
    height: height / 3,
  }
})
