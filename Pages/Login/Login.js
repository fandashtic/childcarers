/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Icon,
  Text,
  Left,
  Right,
  Body,
  Title,
} from 'native-base';

import {AuthContext} from './../../Navigation/Context';

const Login = ({navigation, route}) => {
  const {signIn} = React.useContext(AuthContext);

  return (
    <Container style={{backgroundColor: '#fff', borderWidth: 0}}>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="happy" />
          </Button>
        </Left>
        <Body>
          <Title>ChildCarers</Title>
        </Body>
        <Right />
      </Header>

      <Content style={{marginTop: '60%', padding: 10}}>
        <Form>
          <Item success>
            <Input placeholder="Hello Parent..." />
            <Icon name="checkmark-circle" />
          </Item>
          <Button
            iconLeft
            block
            rounded
            style={{marginTop: '5%', marginRight: '10%', marginLeft: '10%'}}
            onPress={() => signIn()}>
            <Icon name="contact" style={{fontSize: 35, color: 'white'}} />
            <Text style={{fontSize: 18, color: 'white'}}>Continue...</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
