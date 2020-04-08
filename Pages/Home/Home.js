import React from 'react';

import {
  Container,
  Footer,
  Content,
  Button,
  Icon,
  FooterTab,
  Text,
} from 'native-base';

import TopBar from './../TopBar';
import News from '../Modules/News/News';

const Home = ({navigation: {navigate}}) => {
  return (
    <Container>
      <TopBar />
      <Content>
        <News />
      </Content>
      <Footer>
        <FooterTab>
          <Button vertical onPress={() => navigate('Home')}>
            <Icon name="apps" />
            <Text>News</Text>
          </Button>
          <Button vertical onPress={() => navigate('AllFeeds')}>
            <Icon active name="navigate" />
            <Text>Posts</Text>
          </Button>
          <Button vertical onPress={() => navigate('Gallary')}>
            <Icon name="person" />
            <Text>Gallary</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default Home;
