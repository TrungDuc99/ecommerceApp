import * as React from 'react';
import { StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import ButtonsBase from '@/components/buttons-base';
import ProductCard from '@/components/card-product';
import HeaderList from '@/components/header-list';
import { LAPTOP_BRANS } from '@/constants';
import { LAPTOPS } from '@/constants/porducts';
import { View } from '@/ui';

const Laptops = () => {
  const renderItem = ({ item, index }: any) => {
    return (
      <View className="px-2" key={index}>
        <ProductCard item={item} onPress={() => {}} typeProduct="laptop" />
      </View>
    );
  };
  return (
    <View className="mx-2" style={styles.container}>
      <HeaderList title="Laptop" />
      <View className="my-1" />
      <ButtonsBase buttons={LAPTOP_BRANS} />
      <Carousel
        sliderWidth={400}
        itemWidth={220}
        loop
        autoplay={true}
        autoplayInterval={4000}
        data={LAPTOPS}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Laptops;

const styles = StyleSheet.create({
  container: {},
});