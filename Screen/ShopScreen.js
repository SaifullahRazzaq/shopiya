import React from 'react'
import { View,StyleSheet,Dimensions,Image } from 'react-native'
import BottomTab from '../components/Bottom';
import {Container,
  Header,
  Content,
  Body,
  Text,
  H1,
  Button,
  Tab,
  Tabs,
  Item,
  Icon,
  Input,
  Left,
  Right,
  Title,
  ScrollableTab,
  Footer,
  Spinner,
  Grid,
  Col
} from 'native-base'

import {
  ProductGrid,
  FooterTab,
} from '../components'
import theme from '../theme/variables'
import database from '../database'


class ShopScreen extends React.Component {
  state = {  
    flag:false
  }







  render() {
    const dim=Dimensions.get('screen')
    const {scale,height,width,fontScale} = dim
    const {navigate} = this.props.navigation;
    return (
      <Container>
        {this.state.flag==false
          ?
          <Header style={{backgroundColor:'green'}} androidStatusBarColor={'green'} searchBar rounded hasTabs>
          <Left>
            <Button transparent onPress={ () => this.props.navigation.openDrawer()}>
            <Icon name="ios-menu"/>
            </Button>
          </Left>
          <Body>
          <Title>Shop</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="ios-search" onPress={()=>{this.setState({flag:true})}}/>
            </Button>
            <Button transparent>
              <Icon name="ios-cart"/>
            </Button>
          </Right>
        </Header>
      :  <Header searchBar rounded style={{backgroundColor:'green'}} androidStatusBarColor={'green'} >
      <Item>
        <Icon name="ios-search"  onPress={()=>{this.setState({flag:false})}}/>
        <Input placeholder="Search" />
        <Icon name="ios-people" />
      </Item>
      <Button transparent>
        <Text>Search</Text>
      </Button>
    </Header>}
          <Tabs initialPage={0} style={{backgroundColor:"green"}} renderTabBar={()=> <ScrollableTab />}>
            <Tab heading={database.cat1.name}>
              {<ProductGrid products={database.cat1.products} navigate={navigate}/>}
            </Tab>
            <Tab heading={database.cat2.name}>
              {<ProductGrid products={database.cat2.products} navigate={navigate}/>}
            </Tab>
            <Tab heading={database.cat3.name}>
              {<ProductGrid products={database.cat3.products} navigate={navigate}/>}
            </Tab>
          </Tabs>   
      
       
      </Container>
      
    )
  }
}
const styles={
  myStyle : {
    color:'red'
  },
  myStyle2 : {
    fontWeight:'bold',
    fontSize:20,
  }
}


export default ShopScreen;
