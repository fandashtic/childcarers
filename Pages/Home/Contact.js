import React from 'react';

import {
  Container,
  Header,
  Content,
  Form,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Title,
} from 'native-base';

const Contact = () => {
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

      <Content style={{marginTop: '40%', padding: 10}}>
        <Form />
      </Content>
    </Container>
  );
};

export default Contact;

