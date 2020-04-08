import React from 'react';

import {Header, Left, Button, Thumbnail} from 'native-base';
import ScreenContainer from './../Navigation/ScreenContainer';

const ChildFilter = ({navigation}) => {
  const childList = [
    {
      name: 'Child 1',
      url: 'https://p7.hiclipart.com/preview/264/87/653/diaper-infant-photography-child-baby-thumbnail.jpg',
    },
    {
      name: 'Child 2',
      url: 'https://i7.pngguru.com/preview/398/801/251/diaper-infant-halloween-costume-baby-toddler-one-pieces-newborn-thumbnail.jpg',
    },
    {
      name: 'Child 3',
      url: 'https://p7.hiclipart.com/preview/179/946/402/infant-child-photography-clip-art-cute-baby-thumbnail.jpg',
    },
    {
      name: 'Child 4',
      url: 'https://i7.pngguru.com/preview/138/985/134/infant-stock-illustration-illustration-baby-pink-thumbnail.jpg',
    },
  ];

  var list = childList.map(child => (
    <Button key={child.name} transparent style={{width: 30, marginRight: 10}}>
      <ScreenContainer>
        <Thumbnail small source={{uri: child.url}} />
      </ScreenContainer>
    </Button>
  ));

  return list ? <Header>{list}</Header> : null;
};

export default ChildFilter;
