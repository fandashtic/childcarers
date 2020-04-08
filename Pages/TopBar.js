import React from 'react';
import {StyleSheet} from 'react-native';
import {Header, Body, Button, Icon, Left, Right, Thumbnail} from 'native-base';

import ChildFilter from '../Elements/ChildFilter';
import {AuthContext} from './../Navigation/Context';

const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
  yellow: {
    color: 'yellow',
  },
});

const TopBar = ({navigation, route}) => {
  const {signOut} = React.useContext(AuthContext);

  return (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate('Home')}>
          <Icon name="home" />
        </Button>
      </Left>
      <Body>
        <ChildFilter />
      </Body>
      <Right>
        <Button transparent>
          <Icon name="notifications" style={styles.yellow} />
        </Button>
        <Button transparent onPress={() => signOut()}>
          <Icon name="log-out" style={styles.red} />
        </Button>
        <Button transparent>
          <Thumbnail
            small
            source={{
              uri:
                'https://lh3.googleusercontent.com/-_zTf4IrMOvM/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMqdYYXiY4CP8ucu2lN0g4ePB0IBQ/photo.jpg?sz=46',
            }}
          />
        </Button>
      </Right>
    </Header>
  );
};
export default TopBar;
