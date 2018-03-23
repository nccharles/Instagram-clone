import React, { Component } from 'react';
import {  StyleSheet,Image, View, Text, } from 'react-native';
import {Card,CardItem, Thumbnail, Body, Left,Right,Button, Icon} from 'native-base'
export default class CardComponents extends Component {
  render() {
    const images = {
      "1":require('../Images/feed_Images/1.jpeg'),
      "2":require('../Images/feed_Images/2.jpeg'),
      "3":require('../Images/feed_Images/3.jpeg'),
      "4":require('../Images/feed_Images/4.jpeg'),
      "5":require('../Images/feed_Images/5.jpeg'),
      "6":require('../Images/feed_Images/6.jpeg'),
      "7":require('../Images/feed_Images/7.jpeg'),
      "8":require('../Images/feed_Images/8.jpeg')
    }
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../Images/me.jpg')}/>
            <Body>
              <Text>Charles</Text>
              <Text note>march 14,2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={images[this.props.imageSource]} style={{height: 320, width: null, flex: 1}}/>
        </CardItem>
        <CardItem style={{ height: 45}}>
          <Left>
            <Button transparent>
            <Icon name='ios-heart-outline'
            style={{color: 'black'}} />

            </Button>
            <Button transparent>
            <Icon
            name='ios-chatbubbles-outline'
            style={{color: 'black'}}/>
              </Button>
              <Button transparent>
              <Icon name='ios-send-outline'
              style={{ color: 'black'}}/>
              </Button>
          </Left>
        </CardItem>
        <CardItem style={{ height: 20}}>
        <Text>{this.props.likes} likes</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={{ fontWeight: "900"}}>
              Charles, 
              </Text>
             Success is not final, 
            failure is not fatal: it is the courage to continue that counts. 
            Put your heart, mind, and soul into even your smallest acts. 
            Success is no accident.
             Your positive action combined with positive thinking results in success.
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
