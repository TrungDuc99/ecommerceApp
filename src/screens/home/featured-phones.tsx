import * as React from 'react';
import { StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import ButtonsBase from '@/components/buttons-base';
import ProductCard from '@/components/card-product';
import HeaderList from '@/components/header-list';
import { View } from '@/ui';

const phoneBrands = [
  {
    id: '1',
    title: 'Apple',
  },
  {
    id: '2',
    title: 'Samsung',
  },
  {
    id: '3',
    title: 'Huawei',
  },
  {
    id: '4',
    title: 'LG',
  },
  {
    id: '5',
    title: 'Xiaomi',
  },
  {
    id: '6',
    title: 'OPPO',
  },
  {
    id: '7',
    title: 'Vivo',
  },
  {
    id: '8',
    title: 'Nokia',
  },
];
const products = [
  {
    id: '1',
    productName: 'iPhone 14 Pro Max 128GB | Chính hãng VN/A',
    price: 10000,
    image:
      'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png',
    brand: 'Apple',
    category: 'Phones',
    countInStock: 10,
  },
];
const FeaturedPhones = () => {
  const [activeSlide, setActiveSlide] = React.useState<number>(1);

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
      <ButtonsBase buttons={phoneBrands} />
      <Carousel
        sliderWidth={400}
        itemWidth={400}
        loop
        autoplay={true}
        autoplayInterval={4000}
        data={products}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
    </View>
  );
};

export default FeaturedPhones;

const styles = StyleSheet.create({
  container: {},
});
