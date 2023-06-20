import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, TouchableOpacity, View } from '@/ui';

interface HeaderListProps {
  title: string;
  titleViewDetail?: string;
}

const HeaderList = ({
  title,
  titleViewDetail = 'Xem tất cả',
}: HeaderListProps) => {
  return (
    <View style={styles.container}>
      <Text
        variant="xl"
        className="font-semibold text-neutral-700"
        style={styles.title}
      >
        {title}
      </Text>
      <TouchableOpacity>
        <Text variant="lg">{titleViewDetail}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderList;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    textTransform: 'uppercase',
  },
});
