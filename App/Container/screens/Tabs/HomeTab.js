import React, { Component } from 'react';
import { StyleSheet,ScrollView, View, Text, } from 'react-native';
import {container, Content, Icon,Thumbnail, Container,Header,Left,Right,Body } from 'native-base';
import CardComponents from '../../../Components/CardComponent'
export default class HomeTab extends Component {
  render() {
    return (
     <Container style={styles.container}>
      <Header>
       <Left>
       <Icon style={{paddingLeft: 10,}} name='ios-camera-outline' />
       </Left>
       <Body><Text>Instagram</Text></Body>
       <Right><Icon style={{paddingRight: 10,}} name='ios-send-outline' /></Right>
     </Header>
     <Content>
       <View style={{ height: 100}}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7}}>
        <Text style={{ fontWeight: 'bold'}}>Stories</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="md-play" style={{ fontSize: 14}}/>
        <Text style={{ fontWeight: 'bold'}}>Watch All</Text>
        </View>
        </View>
        <View style={{ flex: 3}}>
          <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            paddingStart: 5,
            paddingEnd: 5
          }}
          >
           <Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}} source={require('../../../Images/storiesImages/1.jpg')} />
           <Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}} source={require('../../../Images/storiesImages/2.jpg')} />
           <Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}} source={require('../../../Images/storiesImages/3.jpg')} />
           <Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}} source={require('../../../Images/storiesImages/4.jpg')} />
           <Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}} source={require('../../../Images/storiesImages/5.jpg')} />
           <Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}} source={require('../../../Images/storiesImages/6.jpg')} />
           <Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}} source={require('../../../Images/storiesImages/7.jpg')} />
          </ScrollView>
        </View>
       </View>
     <CardComponents imageSource="1" likes='124'/>
     <CardComponents imageSource="2" likes='654'/>
     <CardComponents imageSource="3" likes='764'/>
     <CardComponents imageSource="4" likes='343'/>
     <CardComponents imageSource="5" likes='124'/>
     <CardComponents imageSource="6" likes='654'/>
     <CardComponents imageSource="7" likes='764'/>
     <CardComponents imageSource="8" likes='343'/>
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