import { Heart, Star1 } from 'iconsax-react-native';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-ui-lib';

import { ScaleSize, Spacing } from '@/configs';
import { colors, Image, Text, TouchableOpacity, View } from '@/ui';

type product = {
  id: number;
  productName: string;
  price: string;
  image: any;
  cost: string;
  tradePrice: string;
};

interface ProductCardProps {
  item: product;
  onPress: (item: product) => void;
}

const ProductCard = ({ item, onPress }: ProductCardProps) => {
  const { id, productName, tradePrice, cost, price, image } = item;
  const [liked, setLiked] = React.useState(false);
  return (
    <Card
      key={id}
      onPress={() => {
        onPress && onPress(item);
      }}
      style={styles.card}
    >
      <View style={styles.containter}>
        <Image
          contentFit="cover"
          source={{ uri: image }}
          style={{ width: '100%', height: 200, marginVertical: Spacing(3) }}
        />
        <Text variant="xs" className="text-left font-semibold">
          {productName}
        </Text>
        <View className="my-3 flex flex-row">
          <Text
            variant="xs"
            className=" mr-2 text-center font-semibold text-red-600"
          >
            {price}đ
          </Text>
          <Text
            variant="xs"
            style={{ textDecorationLine: 'line-through' }}
            className=" align-text-bottom text-[10px] font-semibold text-neutral-600"
          >
            {cost}đ
          </Text>
        </View>
        <View className="flex flex-row">
          <Text
            variant="xs"
            className=" align-text-bottom text-[10px] font-medium  text-neutral-600"
          >
            Giá lên đời:{' '}
          </Text>
          <Text
            variant="xs"
            className=" text-center font-semibold text-red-600"
          >
            {tradePrice}đ
          </Text>
        </View>
        <View className="my-3 flex flex-row">
          <Star1 color="#f59e0b" size="15" variant="Bold" />
          <Star1 color="#f59e0b" size="15" variant="Bold" />
          <Star1 color="#f59e0b" size="15" variant="Bold" />
          <Star1 color="#f59e0b" size="15" variant="Bold" />
          <Star1 color="#f59e0b" size="15" variant="Bold" />
        </View>
        <View style={styles.footerCard}>
          <View className="flex flex-row items-center justify-center">
            <Text variant="xs" className="mr-1 text-neutral-600 ">
              Yêu thích
            </Text>
            <TouchableOpacity onPress={() => setLiked(!liked)}>
              <Heart
                size="25"
                variant={liked ? 'Bold' : 'Outline'}
                color={colors.primary[900]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    width: ScaleSize(200),
    marginVertical: Spacing(4),
  },
  containter: {
    padding: Spacing(2),
  },
  footerCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
