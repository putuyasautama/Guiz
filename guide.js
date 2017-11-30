import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Dimensions,
  View
} from 'react-native';
import {  List, ListItem,Thumbnail, Card, CardItem ,Container, Footer, FooterTab, Header, Content, Form, Item, Input, Label, Text, Button, Icon, Tab, Tabs, TabHeading, Left, Body, Right, Title } from 'native-base';
export default class MobileProject extends Component {
  render() {
    return (
      <Container>
        <Content>
        <View style={{backgroundColor:'#133977', height:50, width:"100%", alignItems:'center'}}>
          <Text style={{color: 'white', marginTop:8}}>GUIZ</Text>
        </View>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="paper-plane" /></TabHeading>} tabStyle={{backgroundColor: '#133977'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#6a9ae8'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={require('./login.jpg')} />
                </Left>
                <Body>
                  <Text>Utama Yasa</Text>
                  <Text style={{fontSize:10}}>April 15, 2016  </Text>
                </Body>
                <Right>
                  <Button transparent style={{height: 30}}><Text style={{fontSize:10, color:'#2f2f2f'}}>Ambil</Text></Button>
                </Right>
              </ListItem>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={require('./login.jpg')} />
                </Left>
                <Body>
                  <Text>Utama Yasa</Text>
                  <Text style={{fontSize:10}}>April 15, 2016  </Text>
                </Body>
                <Right>
                  <Button transparent style={{height: 30}}><Text style={{fontSize:10, color:'#2f2f2f'}}>Ambil</Text></Button>
                </Right>
              </ListItem>
            </List>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="camera" /></TabHeading>} tabStyle={{backgroundColor: '#133977'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#6a9ae8'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <View style={{alignItems:'center'}}>
              <Text style={{marginTop:"20%"}}>
                <Icon name="camera" style={{color:'#2f2f2f'}}/>
              </Text>
              <Item style={{height:30, width:300, alignSelf:'center', marginTop:20}}>
                <Input style={{fontSize:12}} placeholder="Deskripsi" />
              </Item>
              <Item style={{height:30, width:300, alignSelf:'center', marginTop:20}}>
                <Input style={{fontSize:12}} placeholder="Tanggal post" />
              </Item>
              <Button block style={{height:30, width:300, alignSelf:'center', marginTop:20, backgroundColor:"#00BFFF"}}>
                <Text>Buat</Text>
              </Button>
            </View>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="glasses" /></TabHeading>} tabStyle={{backgroundColor: '#133977'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#6a9ae8'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <List>
              <ListItem>
                <Thumbnail square size={80} source={require('./login.jpg')} />
                <Body>
                  <Text note>Wisata alam bagian bali barat</Text>
                </Body>
                <Right>
                  <Button transparent style={{height: 30}}><Text style={{fontSize:10, color:'#2f2f2f'}}>e</Text></Button>
                  <Button transparent style={{height: 30}}><Text style={{fontSize:10, color:'red'}}>h</Text></Button>
                </Right>
              </ListItem>
            </List>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="settings" /></TabHeading>} tabStyle={{backgroundColor: '#133977'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#6a9ae8'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <View style={{alignItems:'center'}}>
              <Image source={require('./login.jpg')} style={{height:200, width: "100%", flex:1, alignItems:'center'}}>
              <Thumbnail large source={require('./login.jpg')} style={{marginTop:50}}/>
              <Item>
                <Text style={{marginTop:5, alignItems:'center'}}>Yasa Utama</Text>
              </Item>
              </Image>
            </View>
            <List>
              <ListItem>
                <Text>Edit Profil</Text>
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
