import React, { Component } from 'react';
import {  StyleSheet,View, Text, Image,Dimensions} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import {container, Content, Icon,Thumbnail, Container,Header,Left,Right,Body, Button } from 'native-base';
var images  = [
  require('../../../Images/feed_Images/1.jpeg'),
  require('../../../Images/feed_Images/2.jpeg'),
  require('../../../Images/feed_Images/3.jpeg'),
  require('../../../Images/feed_Images/4.jpeg'),
  require('../../../Images/feed_Images/5.jpeg'),
  require('../../../Images/feed_Images/6.jpeg'),
  require('../../../Images/feed_Images/7.jpeg'),
]
var {width,height} = Dimensions.get('window');
import CardComponents from '../../../Components/CardComponent'
export default class ProfileTab extends Component {
 
  constructor(props){
    super(props)
    this.state ={
      activeIndex: 0
    }
  } 
  segmentClicked =(index) => {
    this.setState({
      activeIndex: index
    })
  }
  renderSectionOne= () => {
    return images.map((image, index) => {
      return (
        <View key={index} style={[{ width: (width)/ 3}, { height: (width) /3},{marginBottom: 2},
        index % 3 !== 0 ? { paddingLeft: 2} : { paddingLeft: 0}
        ]}>
         <Image style={{ flex: 1, width: undefined, height: undefined}}
         source={image} 
         />
        </View>
      )
    })
  }
 renderSection = () => {
   if(this.state.activeIndex == 0){
     return (
       <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
       {this.renderSectionOne()}
       </View>
     )
   }
   else if(this.state.activeIndex == 1)
   {
     return(
       <View>
        <CardComponents imageSource="1" likes='124'/>
        <CardComponents imageSource="2" likes='654'/>
        <CardComponents imageSource="3" likes='764'/>
        <CardComponents imageSource="4" likes='343'/>
        <CardComponents imageSource="5" likes='124'/>
        <CardComponents imageSource="6" likes='654'/>
        <CardComponents imageSource="7" likes='764'/>
        <CardComponents imageSource="8" likes='343'/>
       </View>
     
     )
   }
 }
  render() {
    return (
      <Container style={styles.container}>
      <Header>
       <Left>
       <Icon style={{paddingLeft: 10,}} name='md-person-add' />
       </Left>
       <Body><Text style={{fontWeight: '900'}}>Charlesofficial_250</Text></Body>
       <Right><EntypoIcon style={{paddingRight: 10,fontSize: 32}} name='back-in-time' /></Right>
     </Header>
     <Content>
       <View style={{ paddingTop: 10}}>
       <View style={{ flexDirection: 'row'}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image source={require('../../../Images/me.jpg')}
          style={{width: 75, height: 75, borderRadius: 37.5}}
          />
        </View>
        <View style={{ flex: 3}}>
         <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
         <View style={{ alignItems: 'center'}}>
          <Text>20</Text>
          <Text style={{ fontSize: 10, color: 'grey'}}>posts</Text>
         </View>
         <View style={{ alignItems: 'center'}}>
          <Text>208</Text>
          <Text style={{ fontSize: 10, color: 'grey'}}>followers</Text>
         </View>
         <View style={{ alignItems: 'center'}}>
          <Text>100</Text>
          <Text style={{ fontSize: 10, color: 'grey'}}>following</Text>
         </View>
         </View>
         <View style={{ flexDirection: 'row',paddingTop: 10}}>
          <Button bordered dark
          style={{ flex: 3, marginLeft: 10,
          justifyContent: 'center', height: 30}}>
             <Text>Edit Profile</Text>
          </Button>
          <Button bordered dark
          style={{ flex: 1,marginRight: 10, marginLeft: 5,
          justifyContent: 'center', height: 30}}>
             <Icon name='settings'/>
          </Button>
         </View>
        </View>
       </View>
       <View style={{ paddingBottom: 10, paddingHorizontal: 10}}>
        <Text style={{ fontWeight: 'bold'}}>Charles NDAYISABA</Text>
        <Text>Dancer | Software Developer | Geek Boy</Text>
        <Text>www.limitless.rw</Text>
       </View>
       </View>
       <View>
         <View style={{ flexDirection: 'row', justifyContent: 'space-around',
          borderTopWidth: 1, borderTopColor: '#eae5e5'}}>
          <Button transparent 
          onPress={()=> this.segmentClicked(0)}
          active={this.state.activeIndex == 0}
          >
           <Icon 
           style={[this.state.activeIndex == 0 ? {}: { color: 'grey'}]}
           name='ios-apps-outline'/>
          </Button>
          <Button transparent
           onPress={()=> this.segmentClicked(1)}
           active={this.state.activeIndex == 1}>
           <Icon name='ios-list-outline'
           style={[this.state.activeIndex == 1 ? {}: { color: 'grey'}]}
           />
          </Button>
          <Button transparent
           onPress={()=> this.segmentClicked(2)}
           active={this.state.activeIndex == 2}>
           <Icon name='ios-people-outline'
           style={[this.state.activeIndex == 2 ? {}: { color: 'grey'}]}
           />
          </Button>
          <Button transparent
           onPress={()=> this.segmentClicked(3)}
           active={this.state.activeIndex == 3}>
           <Icon name='ios-bookmark-outline'
           style={[this.state.activeIndex == 3 ? {}: { color: 'grey'}]}
           />
          </Button>
          </View>
          {this.renderSection()}
       </View>
     </Content>
     </Container>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });