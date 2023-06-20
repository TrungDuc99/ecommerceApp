import * as React from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import { Text, WIDTH } from '@/ui';

const MenuHeader = () => {
  const FadeInView = (props: any) => {
    const fadeAnim = React.useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    React.useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]);

    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim, // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FadeInView
          style={{
            width: WIDTH,
            height: 50,
            backgroundColor: '#D70018',
          }}
        >
          <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>
            Fading in
          </Text>
        </FadeInView>
      </View>
    </View>
  );
};

export default MenuHeader;

const styles = StyleSheet.create({
  container: {},
});
