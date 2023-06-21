import * as React from 'react';
import { StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import ButtonsBase from '@/components/buttons-base';
import ProductCard from '@/components/card-product';
import HeaderList from '@/components/header-list';
import { PHONE_BRANS, PHONES } from '@/constants';
import { View } from '@/ui';

const FeaturedPhones = () => {
  const renderItem = ({ item, index }: any) => {
    return (
      <View className="px-2" key={index}>
        <ProductCard item={item} onPress={() => {}} />
      </View>
    );
  };
  return (
    <View className="mx-2" style={styles.container}>
      <HeaderList title="ĐIỆN THOẠI NỔI BẬT" />
      <View className="my-1" />
      <ButtonsBase buttons={PHONE_BRANS} />
      <Carousel
        sliderWidth={400}
        itemWidth={200}
        loop
        autoplay={true}
        autoplayInterval={4000}
        data={PHONES}
        renderItem={renderItem}
      />
    </View>
  );
};

export default FeaturedPhones;

const styles = StyleSheet.create({
  container: {},
});
