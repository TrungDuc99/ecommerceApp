import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-ui-lib';

import { Image, Text } from '@/ui';

type product = {
  id: number;
  name: string;
  price: number;
  image: any;
};

interface ProductCardProps {
  item: product;
  onPress: (item: product) => void;
}

const ProductCard = ({ item, onPress }: ProductCardProps) => {
  const { id, name, price, image } = item;
  console.log('====================================');
  console.log(item);
  console.log('====================================');
  return (
    <Card
      onPress={() => {
        onPress && onPress(item);
      }}
      style={styles.container}
    >
      <Image
        contentFit="cover"
        source={{ uri: image, width: 100, height: 150 }}
      />
      <Text>{name}</Text>
    </Card>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {},
});
