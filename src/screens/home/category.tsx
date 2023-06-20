import * as React from 'react';
import { StyleSheet } from 'react-native';

import categoryService from '@/api/category';
import CardBase from '@/components/card-base';
import HeaderList from '@/components/header-list';
import { ScrollView, View } from '@/ui';

export type categoryType = {
  id: string;
  title: string;
  image: any;
};
const category1 = [
  {
    id: '1',
    image: require('@/assets/images/category/icon-phone-tablet_1.png'),
    title: `Điện thoại \n Tablet`,
  },
  {
    id: '2',
    image: require('@/assets/images/category/menu-laptop-v2.png'),
    title: 'Laptop',
  },
  {
    id: '3',
    image: require('@/assets/images/category/dong-ho-may-anh.png'),
    title: 'Đồng hồ, \n Máy ảnh',
  },
  {
    id: '4',
    image: require('@/assets/images/category/menu-audio-v2.png'),
    title: 'Âm thanh',
  },
  {
    id: '5',
    image: require('@/assets/images/category/menu-smarthome.png'),
    title: 'Nhà thông, \n minh',
  },
  {
    id: '6',
    image: require('@/assets/images/category/menu-accessories.png'),
    title: 'Phụ kiện',
  },
];
const category2 = [
  {
    id: '7',
    image: require('@/assets/images/category/menu-pc-monitor.png'),
    title: 'PC, \n Màn hình',
  },
  {
    id: '8',
    image: require('@/assets/images/category/menu-tv.png'),
    title: 'Tivi',
  },
  {
    id: '9',
    image: require('@/assets/images/category/menu-old-product.png'),
    title: 'Thu cũ',
  },
  {
    id: '10',
    image: require('@/assets/images/category/menu-trade_in.png'),
    title: 'Hàng cũ',
  },
  {
    id: '11',
    image: require('@/assets/images/category/menu-deal.png'),
    title: `Khuyến mãi`,
  },
  {
    id: '12',
    image: require('@/assets/images/category/sforum-news.png'),
    title: 'Tin công nghệ',
  },
];
const Category = () => {
  const [category, setCategory] = React.useState<any>();

  const getAllCategory = () => {
    categoryService
      .getAll()
      .then((res: any) => {
        setCategory(res.Categories);
      })
      .catch((err) => {});
  };
  React.useEffect(() => {
    getAllCategory();
  }, []);
  return (
    <View style={styles.container}>
      <View className="mt-2" />
      <HeaderList title="DANH MỤC" titleViewDetail="" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="my-2 ml-1">
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            {category?.map((item: any) => (
              <CardBase key={item.id} item={item} onPress={() => {}} />
            ))}
          </View>

          <View style={{ display: 'flex', flexDirection: 'row' }}>
            {category2.map((item) => (
              <CardBase key={item.id} item={item} onPress={() => {}} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },

  title: {},
  item: {},
  image: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
});
