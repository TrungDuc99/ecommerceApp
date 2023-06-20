import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { ScaleSize, Spacing } from '@/configs';
import { Image, Text, TouchableOpacity } from '@/ui';

interface CardBaseProps {
  item: {
    id: any;
    title: string;
    Name?: string;
    image: any;
  };
  onPress: (item: any) => void;
}

const CardBase = ({ item, onPress }: CardBaseProps) => {
  const { title, id, image, Name } = item;
  return (
    <View>
      <View key={id} style={styles.container}>
        <TouchableOpacity onPress={() => onPress(item)}>
          <Image contentFit="cover" source={image} style={styles.image} />
        </TouchableOpacity>
      </View>
      <Text variant="xs" className="font-semibold" style={styles.title}>
        {title || Name}
      </Text>
    </View>
  );
};

export default CardBase;

const styles = StyleSheet.create({
  container: {
    padding: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing(3),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 20,
  },
  title: {
    marginVertical: 10,
    marginRight: 10,
    textAlign: 'center',
  },
  item: {},
  image: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: ScaleSize(75),
    height: ScaleSize(75),
  },
});
