import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';

import { View } from '@/ui';

import BannerTop from './banner-top';
import CarouselSlider from './carousel';
import Category from './category';
import FeaturedPhones from './featured-phones';
import MenuHeader from './menu';
import StandBanner from './permanent-banner';

export const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleOnScroll = (event) => {
    // Lấy vị trí hiện tại của scroll
    const currentPosition = event.nativeEvent.contentOffset.y;
    setScrollPosition(currentPosition);
  };
  console.log('====================================');
  console.log(scrollPosition);
  console.log('====================================');
  return (
    <View className="flex-1   ">
      <BannerTop />
      <MenuHeader />
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.paddingForHeader} />
        <View>
          <CarouselSlider />
          <StandBanner />
          <Category />
          <FeaturedPhones />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  scrollViewContent: {
    // height: HEIGHT * 2,
    // backgroundColor: 'white',
  },
  paddingForHeader: {
    // height: 136,
  },
});
