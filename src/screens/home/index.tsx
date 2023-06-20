import React from 'react';

import { ScrollView, View } from '@/ui';

import CarouselSlider from './carousel';
import MenuHeader from './menu';

export const Home = () => {
  return (
    <ScrollView>
      <View className="flex-1   pt-10">
        <MenuHeader />
        <CarouselSlider />
      </View>
    </ScrollView>
  );
};
