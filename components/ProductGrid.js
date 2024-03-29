import React, { Component } from 'react';
import { View,FlatList,Image,Dimensions,StyleSheet,TouchableOpacity } from 'react-native';
import { Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Thumbnail,
  Button,
  Icon,
  Left,
  Right,
  Spinner,
  Footer,
  Grid,
  Col
} from 'native-base';
// import ResponsiveImage from 'react-native-responsive-image';
// import FitImage from 'react-native-fit-image'

const {width, height, scale} = Dimensions.get("window")
const productWidth = (width - 45) / 2
const currencySymbol="$ "

class ProductGrid extends Component {
  state={
    products : {},
    fetching:false
  }

  componentDidMount () {
    // simulate fetch products with delay
    this.setState({fetching:true})
    setTimeout(() => {
      this.setState({products:this.props.products})
      this.setState({fetching:false})
    },500)
  }
  
  // state = {selected: (new Map(): Map<string, boolean>)};
  _renderItem = (item) =>(<ProductItem post={item} navigate={this.props.navigate}   />)
  //yahan navigate main item k bad add hoga ye
  _keyExtractor = (item,index) => item.id
  
  render() {
    if (this.state.fetching){
      return( <Spinner/>)
    }
    return (
      <View style={{flex:1}}>
        <View style={{backgroundColor:"#FFF",borderBottomColor:'#F1F1F1',borderBottomWidth:1,borderTopWidth:0,flex:1}}>
          <Grid>
            <Col size={4} style={{borderRightWidth:1,borderRightColor:'#F1F1F1',alignItems:'center',justifyContent:'center'}}>
              <Button transparent small>
                <Icon name="logo-buffer"/>
                <Text>Sort</Text> 
              </Button>
            </Col>
            <Col size={4} style={{borderRightWidth:1,borderRightColor:'#F1F1F1',alignItems:'center',justifyContent:'center'}}>
              <Button transparent small>
                <Icon name="ios-funnel"/>
                <Text>Filter</Text> 
              </Button>
            </Col>
            <Col size={2} style={{alignItems:'center',justifyContent:'center'}}>
              <Button transparent small>
                <Icon name="ios-keypad"/>
              </Button>
            </Col>
          </Grid>
        </View>
        <View style={{flex:9,padding:2,backgroundColor:"#F1F1F1"}}>
          <FlatList
            data={this.state.products}
            numColumns={2}
            horizontal={false}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            extraData={this.state}
          />
        </View>    
      </View>
    );
  }
}

export default ProductGrid;


class ProductItem extends React.PureComponent {
  state ={
    featuredImage :'',
    categoryName:'cat',
  }
  
  componentDidMount() {
     featuredMedia_id=this.props.post.item.featured_media
     this.setState({
      categoryName:'change'
     })
  }

  _onPress = () => {
    // this.props.onPressItem(this.props.id);
  };

  productDetail(navigate,product){
    navigate('ProductScreen',{product:product})
  }

  render() {
    const {title,price,picture,unitSize}=this.props.post.item
    let priceDisplay = currencySymbol + price 
    if (unitSize != undefined){
      priceDisplay = priceDisplay + ' / ' + unitSize
    }

    return (
      <TouchableOpacity style={{flex: 1}} onPress={ () => this.productDetail(this.props.navigate,this.props.post.item)}>
        <Card>
          <CardItem>
            <Body>
              <Image  
                source={{uri:picture}}
                style={styles.productItem} 
              /> 
              <Text style={styles.productTitle}>{title}</Text>
              <Text style={styles.productPrice}>{priceDisplay}</Text>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
    )
  }
}

var styles = StyleSheet.create({
  productItem: {
    width: productWidth,
    height:productWidth,
    alignSelf:'center',
  },
  productTitle:{
    marginBottom:5
  },
  productPrice:{
    fontSize:14,
    fontWeight:'700',
    marginBottom:20
  }
});
 