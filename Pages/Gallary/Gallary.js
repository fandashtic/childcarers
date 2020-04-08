import React from 'react';
import {Tabs, Tab} from 'native-base';
import Photos from './Photos';
import Video from './Video';
import TopBar from './../TopBar';

const Gallary = ({navigation, route}) => {
  return (
    <>
      <TopBar navigation={navigation} />
      <Tabs>
        <Tab heading="Photos">
          <Photos />
        </Tab>
        <Tab heading="Video">
          <Video />
        </Tab>
      </Tabs>
    </>
  );
};

export default Gallary;
