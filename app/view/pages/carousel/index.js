import React, {useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  StatusBar,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  I18nManager,
} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';

const Slider = () => {
  const Weather = [
    {
      image: require('../../../assets/images/card1.png'),
      weather: 'Heavy Rain',
      weath_Im: require('../../../assets/images/rain.png'),
      Time: 'Morning',
      Temp: '29 °',
      Qu: 'Feels Like 30 °',
      Day: 'Today 08-05-2021',
    },
    {
      image: require('../../../assets/images/card2.png'),
      weather: 'Cloudy',
      weath_Im: require('../../../assets/images/cloudy.png'),
      Time: 'Morning',
      Temp: '25 °',
      Qu: 'Feels Like 15 °',
      Day: 'Yesterday 08-05-2021',
    },
    {
      image: require('../../../assets/images/card3.png'),
      weather: 'Heavy Rain',
      weath_Im: require('../../../assets/images/rain.png'),
      Time: 'Morning',
      Temp: '27 °',
      Qu: 'Feels Like 30 °',
      Day: 'Tomorrow 10-05-2021',
    },
    {
      image: require('../../../assets/images/card1.png'),
      weather: 'Heavy Rain',
      weath_Im: require('../../../assets/images/rain.png'),
      Time: 'Morning',
      Temp: '29 °',
      Qu: 'Feels Like 30 °',
      Day: 'Today 08-05-2021',
    },
    {
      image: require('../../../assets/images/card4.png'),
      weather: 'Sunny',
      weath_Im: require('../../../assets/images/sunny.png'),
      Time: 'Morning',
      Temp: '45 °',
      Qu: 'Feels Like 50 °',
      Day: 'Today 08-05-2021',
    },
    {
      image: require('../../../assets/images/card2.png'),
      weather: 'Cloudy',
      weath_Im: require('../../../assets/images/cloudy.png'),
      Time: 'Morning',
      Temp: '25 °',
      Qu: 'Feels Like 15 °',
      Day: 'Yesterday 08-05-2021',
    },
  ];

  //I18nManager.forceRTL(true);
  const {width} = Dimensions.get('window');

  const carouselRef = useRef(null);
  const [index, setIndex] = React.useState(0);
  // console.log(index)

  const RenderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback>
        <View>
          <ImageBackground
            source={item.image}
            style={{
              width: 360,
              height: 240,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
            borderRadius={10}>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: '#ffffff', fontWeight: '600', fontSize: 20}}>
                {item.Day}
              </Text>
              <Image style={{height: 100, width: 100}} source={item.weath_Im} />
              <View>
                <Text
                  style={{color: '#ffffff', fontWeight: 'bold', fontSize: 25}}>
                  {item.weather}
                </Text>
                <Text
                  style={{color: '#ffffff', fontWeight: '600', fontSize: 20}}>
                  {item.Time}
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: 65,
                  textAlign: 'center',
                }}>
                {item.Temp}
              </Text>
              <Text style={{color: '#ffffff', fontWeight: '600', fontSize: 20}}>
                {item.Qu}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  // SLIDING PANEL

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <View style={{paddingHorizontal: 14}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 26, color: '#fff'}}>Esfahan</Text>
              </View>
              <Text style={{fontSize: 26, color: '#fff', opacity: 0.6}}>
                Daily Weather
              </Text>
            </View>
            <View style={styles.button}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => {
                    carouselRef.current.snapToPrev();
                  }}>
                  <Text style={styles.buttonNext}>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    carouselRef.current.snapToNext();
                  }}>
                  <Text style={styles.buttonPrev}>Next</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View>
            <Carousel
              data={I18nManager.swapLeftAndRightInRTL && Weather}
              renderItem={RenderItem}
              sliderWidth={width}
              itemWidth={width - 10}
              // activeSlideOffset={1} //From slider's center, minimum slide distance to be scrolled before being set to active.
              //apparitionDelay={1000}
              //callbackOffsetMargin={() => {}}
              enableMomentum={false}
              decelerationRate="normal" //fast
              //enableSnap={true}  //If enabled, releasing the touch will scroll to the center of the nearest/active item
              //firstItem
              lockScrollTimeoutDuration={3000}
              lockScrollWhileSnapping={true}
              //scrollEnabled={false}
              //shouldOptimizeUpdates Whether to implement a shouldComponentUpdate strategy to minimize updates
              swipeThreshold={20}
              loop={true}
              loopClonesPerSide={50}
              autoplay={true}
              autoplayDelay={1000}
              autoplayInterval={4000}
              // directionalLockEnabled={true}
              //Style and animation
              //activeAnimationOptions Custom animation options   cannot use props layout, scrollInterpolator or slideInterpolatedStyle in conjunction with activeAnimationOptions.
              activeAnimationType="timing" //'decay, 'spring'
              activeSlideAlignment="end" //'start', 'center'  It is not recommended to use this prop in conjunction with the layout one.
              inactiveSlideOpacity={0}
              inactiveSlideScale={0}
              containerCustomStyle={{
                // Optional styles for Scrollview's global wrapper
                marginVertical: 60,
              }}
              contentContainerCustomStyle={{
                //Optional styles for Scrollview's items container
                paddingTop: 18,
              }}
              layout={'default'} //'default' , 'stack' , 'tinder'
              layoutCardOffset={-15}
              pagingEnabled={true}
              //slideInterpolatedStyle Function  returns a style object. It will receive three arguments: index, animatedValue and carouselProps
              slideStyle //Animated View Style Object
              /* Callback */
              //onLayout(event)
              //onScroll(event)
              //onBeforeSnapToItem(slideIndex)
              onSnapToItem={(index) => setIndex(index)}
              ref={carouselRef}
              //Available methods
              //startAutoplay (instantly = false)
              //stopAutoplay ()
              //snapToItem (index, animated = true, fireCallback = true)
              //snapToNext (animated = true, fireCallback = true)
              //snapToPrev (animated = true, fireCallback = true)
              //triggerRenderingHack (offset)
            />
            <Pagination
              dotsLength={Weather.length}
              activeDotIndex={index}
              carouselRef={carouselRef}
              dotStyle={styles.dotStyle}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.8}
              tappableDots={true}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 0,
    height: 700,
  },
  City: {
    width: 55,
    height: 55,
    borderRadius: 40,
  },
  CityNotification: {
    height: 12,
    width: 12,
    backgroundColor: '#4853ef',
    borderRadius: 6,
    position: 'absolute',
    right: 6,
    borderWidth: 2,
    borderColor: '#000',
  },
  AddCity: {
    height: 140,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0c0c0c',
    borderRadius: 10,
    marginRight: 14,
  },
  AddCityIconbg: {
    width: 70,
    height: 70,
    backgroundColor: '#000',
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },
  weth: {
    height: 100,
    width: 360,
    backgroundColor: '#F9F6F4',
    marginBottom: 20,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: 'white',
    bottom: 35,
  },
  buttonNext: {
    color: 'white',
    // alignItems: 'flex-end',
    // left: 300,
    // fontSize: 16,
    // fontWeight: 'bold',
    // bottom: 3,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 35,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonPrev: {
    color: 'white',
    // fontWeight: 'bold',
    // fontSize: 16,
    // bottom: 25,
  },
  button: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 380,
    marginRight: 32,
    marginLeft: -150,
  },
});

export default Slider;
