import * as React from 'react';

import { ScaleSize } from '@/configs';
import { Image, View, WIDTH } from '@/ui';

const StandBanner = () => {
  return (
    <View className="mt-2 items-center">
      <Image
        style={{
          borderRadius: 10,
          width: WIDTH - 15,
          height: ScaleSize(70),
        }}
        contentFit="cover"
        source={{
          uri: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:800:150/q:80/plain/https://dashboard.cellphones.com.vn/storage/banner-special-mobile-b2s-new.png',
        }}
      />
    </View>
  );
};

export default StandBanner;
