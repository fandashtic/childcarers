import React from 'react';
import {Tabs, Tab} from 'native-base';

import ChildrenUpdate from './ChildrenUpdate/ChildrenUpdate';
import LearningJourney from './LearningJourney/LearningJourney';
import TopBar from './../TopBar';

import Programs from './Programs/Programs';

const AllFeeds = ({navigation}) => {
  return (
    <>
      <TopBar navigation={navigation} />
      <Tabs>
        <Tab heading="Learning Journey">
          <LearningJourney />
        </Tab>
        <Tab heading="Programs">
          <Programs />
        </Tab>
        <Tab heading="Children Update">
          <ChildrenUpdate />
        </Tab>
      </Tabs>
    </>
  );
};

export default AllFeeds;
