/* eslint-disable max-lines-per-function */

import React, { useRef } from 'react';
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
} from 'react-native';

import { colors, HEIGHT, Image, View } from '@/ui';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const Home = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);
  const lastOffsetY = useRef(0);
  const scrollDirection = useRef('');
  const searchInputAnimation = {
    transform: [
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 25],
          outputRange: [0, -100],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };

  const featureNameAnimation = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 30],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 30],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };
  const depositViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, 36],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -55],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  const withdrawViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, -16],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -55],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  const qrViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, -60],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -55],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  const scanViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, -110],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -55],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  const featureIconCircleAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };
  const featureIconAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  };
  return (
    <View className="flex-1 ">
      {/* <BannerTop />
      <MenuHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CarouselSlider />
        <StandBanner />
        <Category />
        <FeaturedPhones />
        <Laptops />
        <OuterCategories />
        <PaymentOffer />
        <TechNews />
      </ScrollView> */}
      {/* -------------------------------- */}
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView>
        <View style={styles.upperHeaderPlaceholder} />
      </SafeAreaView>

      <SafeAreaView style={styles.header}>
        <View style={styles.upperHeader}>
          <View style={styles.searchContainer}>
            <Image
              source={require('@/assets/images/momo/search.png')}
              style={styles.searchIcon}
            />
            <AnimatedTextInput
              placeholder="Tìm kiếm"
              placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
              style={[styles.searchInput, searchInputAnimation]}
            />
          </View>
          <Image
            source={require('@/assets/images/momo/bell.png')}
            style={styles.bellIcon}
          />
          <Image
            source={require('@/assets/images/momo/avatar.png')}
            style={styles.avatar}
          />
        </View>
        <View style={styles.lowerHeader}>
          <Animated.View style={[styles.feature, depositViewAnimation]}>
            <Animated.Image
              source={require('@/assets/images/momo/deposit-circle.png')}
              style={[styles.featureIconCircles, featureIconCircleAnimation]}
            />
            <Animated.Image
              source={require('@/assets/images/momo/deposit.png')}
              style={[styles.featureIcon, featureIconAnimation]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              NẠP TIỀN
            </Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.feature, withdrawViewAnimation]}>
            <Animated.Image
              source={require('@/assets/images/momo/withdraw-circle.png')}
              style={[styles.featureIconCircles, featureIconCircleAnimation]}
            />
            <Animated.Image
              source={require('@/assets/images/momo/withdraw.png')}
              style={[styles.featureIcon, featureIconAnimation]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              RÚT TIỀN{' '}
            </Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.feature, qrViewAnimation]}>
            <Animated.Image
              source={require('@/assets/images/momo/qr-circle.png')}
              style={[styles.featureIconCircles, featureIconCircleAnimation]}
            />
            <Animated.Image
              source={require('@/assets/images/momo/qr.png')}
              style={[styles.featureIcon, featureIconAnimation]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              MÃ QR{' '}
            </Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.feature, scanViewAnimation]}>
            <Animated.Image
              source={require('@/assets/images/momo/scan-circle.png')}
              style={[styles.featureIconCircles, featureIconCircleAnimation]}
            />
            <Animated.Image
              source={require('@/assets/images/momo/scan.png')}
              style={[styles.featureIcon, featureIconAnimation]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              QUÉT MÃ{' '}
            </Animated.Text>
          </Animated.View>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        onScroll={(e) => {
          const offsetY = e.nativeEvent.contentOffset.y;
          scrollDirection.current =
            offsetY - lastOffsetY.current > 0 ? 'down' : 'up';
          lastOffsetY.current = offsetY;
          animatedValue.setValue(offsetY);
        }}
        onScrollEndDrag={() => {
          scrollViewRef.current?.scrollTo({
            y: scrollDirection.current === 'down' ? 100 : 0,
            animated: true,
          });
        }}
        scrollEventThrottle={16}
      >
        <View style={styles.paddingForHeader} />
        <View style={styles.scrollViewContent}>
          {/* <CarouselSlider />
          <StandBanner />
          <Category />
          <FeaturedPhones />
          <Laptops />
          <OuterCategories />
          <PaymentOffer />
          <TechNews /> */}
        </View>
      </ScrollView>
    </View>
  );
};
const UPPER_HEADER_HEIGHT = 40;
const LOWER_HEADER_HEIGHT = 96;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  upperHeaderPlaceholder: {
    height: 40,
  },
  header: {
    width: '100%',
    position: 'absolute',
    backgroundColor: colors.primary[900],
  },
  upperHeader: {
    height: UPPER_HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  lowerHeader: {
    height: LOWER_HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    width: '100%',
  },
  paddingForHeader: {
    height: LOWER_HEADER_HEIGHT,
  },
  scrollViewContent: {
    height: HEIGHT * 2,
    marginTop: 2,
    backgroundColor: 'white',
  },

  searchContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  searchIcon: { width: 16, height: 16, marginLeft: 8 },
  bellIcon: { width: 16, height: 16, marginHorizontal: 19 },
  avatar: { width: 28, height: 28 },
  searchInput: {
    position: 'absolute',
    width: '100%',
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 4,
    paddingLeft: 32,
  },

  feature: {
    alignItems: 'center',
  },
  featureIconCircles: {
    width: 32,
    height: 32,
  },
  featureIcon: {
    width: 16,
    height: 16,
    position: 'absolute',
    top: 8,
  },
  featureName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 12,
    lineHeight: 14,
  },
});
/* eslint-enable max-lines-per-function */
