import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Dimensions,
  View
} from 'react-native';
import * as firebase from 'firebase';
import { StackNavigator } from 'react-navigation';
import {  List, ListItem,Thumbnail, Card, CardItem ,Container, Footer, FooterTab, Header, Content, Form, Item, Input, Label, Text, Button, Icon, Tab, Tabs, TabHeading, Left, Body, Right, Title } from 'native-base';

export default class Homes extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
        <View style={{backgroundColor:'#133977', height:50, width:"100%", alignItems:'center'}}>
          <Text style={{color: 'white', marginTop:8}}>GUIZ</Text>
        </View>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="paper-plane" /><Text>Paket</Text></TabHeading>} tabStyle={{backgroundColor: '#133977'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#6a9ae8'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
              <Card>
                <CardItem style={{flex: 0}}>
                  <Left>
                    <Thumbnail source={require('./login.jpg')} />
                    <Body>
                      <Text>Yasa Utama</Text>
                      <Text note>5 Nov, 2016</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body>
                    <Image source={require('./login.jpg')} style={{height:200, width: "100%"}}/>
                    <Text>
                      Wisata alam dibagian bali barat
                    </Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem style={{flex: 0}}>
                  <Left>
                    <Thumbnail source={require('./login.jpg')} />
                    <Body>
                      <Text>Putu</Text>
                      <Text note>April 15, 2016</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body>
                    <Image source={require('./login.jpg')} style={{height:200, width: "100%"}}/>
                    <Text>
                      Yasa
                    </Text>
                  </Body>
                </CardItem>
              </Card>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="person" /><Text>Profil</Text></TabHeading>} tabStyle={{backgroundColor: '#133977'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#6a9ae8'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <View style={{alignItems:'center'}}>
              <Image source={require('./login.jpg')} style={{height:200, width: "100%", flex:1}}/>
              <Thumbnail large source={require('./login.jpg')} style={{marginTop:-50}}/>
              <Item>
                <Icon active name='person' />
                <Text style={{marginTop:5, alignItems:'center'}}>Yasa Utama</Text>
              </Item>
              <Item>
                <Icon active name='person' />
                <Text style={{marginTop:5, alignItems:'center'}}>O89654748619</Text>
              </Item>
              <Item>
                <Icon active name='paper' />
                <Text style={{marginTop:5, alignItems:'center'}}>putuyasautama16@gmail.com</Text>
              </Item>
            </View>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="settings" /><Text>Setting</Text></TabHeading>} tabStyle={{backgroundColor: '#133977'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#6a9ae8'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <List>
              <ListItem>
                <Text>Edit Profil</Text>
              </ListItem>
              <ListItem>
                <Text>Tentang Kami</Text>
              </ListItem>
              <ListItem>
                <Text>Keluar</Text>
              </ListItem>
            </List>
          </Tab>
        </Tabs> 
        </Content>
      </Container>
    );
  }
}

AppRegistry.registerComponent('MobileProject', () => MobileProject);
