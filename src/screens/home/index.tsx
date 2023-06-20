import React from 'react';

import { ScrollView, View } from '@/ui';

import BannerTop from './banner-top';
import CarouselSlider from './carousel';
import Category from './category';
import FeaturedPhones from './featured-phones';
import MenuHeader from './menu';
import StandBanner from './permanent-banner';

export const Home = () => {
  return (
    <View className="flex-1   ">
      <BannerTop />
      <ScrollView>
        <View>
          <MenuHeader />
          <CarouselSlider />
          <StandBanner />
          <Category />
          <FeaturedPhones />
        </View>
      </ScrollView>
    </View>
  );
};
