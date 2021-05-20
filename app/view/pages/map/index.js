import React, {useState, useEffect, useMemo} from 'react';
import {StyleSheet, View, TextInput, Image} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
//import { PermissionsAndroid } from 'react-native';
import LocationEnabler from 'react-native-location-enabler';

import images from 'assets/images/images';

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoic2FyYXBhcnNhIiwiYSI6ImNrb2lvZXJneDAzeWkydm53YXdtZ2g2NTYifQ.j77meGI5Gzkw8DodiIHjsg',
);

let data = {
  type: 'FeatureCollection',
  features: [
    {
      title: 'Si-O-Se-pol',
      description: 'This is the best place in isfahan',
      type: 'Feature',
      id: '9d10456e-bdda-4aa9-9269-04c1667d4552',
      avatar_url: images.images.marker,
      properties: {
        icon: 'exampleIcon',
      },
      geometry: {
        type: 'Point',
        coordinates: [51.667545, 32.644073],
      },
    },
    {
      title: 'Pol-Khajoo',
      description: 'This is the second best place in isfahan',
      type: 'Feature',
      id: '9d10456e-bdda-4aa9-9269-04c1667d45522',
      avatar_url: images.images.marker,
      properties: {
        icon: 'exampleIcon',
      },
      geometry: {
        type: 'Point',
        coordinates: [51.683288, 32.636827],
      },
    },
    {
      title: 'Pol-Bozorgmehr',
      description: 'This is the third best place in isfahan',
      type: 'Feature',
      id: '9d10456e-bdda-4aa9-9269-04c1667d45523',
      avatar_url: images.images.marker,
      properties: {
        icon: 'exampleIcon',
      },
      geometry: {
        type: 'Point',
        coordinates: [51.69432, 32.639176],
      },
    },
  ],
};

let icon = {
  iconImage: require('./marker.png'),
  iconAllowOverlap: true,
  iconSize: 0.1,
};
let viewItem = (
  <MapboxGL.ShapeSource
    id={'exampleShapSource'}
    hitbox={{width: 20, height: 20}}
    onPress={(e) => {
      console.log(e);
    }}
    shape={data}>
    <MapboxGL.SymbolLayer
      id={'exampleIconName'}
      style={icon}></MapboxGL.SymbolLayer>
  </MapboxGL.ShapeSource>
);

const {
  PRIORITIES: {HIGH_ACCURACY},
  useLocationSettings,
} = LocationEnabler;

const MapScreen = () => {
  const [viewport, setViewport] = useState({
    markers: [
      {
        coordinate: [32.644073, 51.667545],
        title: 'Si-O-Se-pol',
        description: 'This is the best place in isfahan',
      },
      {
        coordinate: [32.636827, 51.683288],
        title: 'Pol-Khajoo',
        description: 'This is the second best place in isfahan',
      },
      {
        coordinate: [32.639176, 51.69432],
        title: 'Pol-Bozorgmehr',
        description: 'This is the third best place in isfahan',
      },
      {
        coordinate: [32.63399, 51.704575],
        title: 'Pol-Ghadir',
        description: 'This is the fourth best place in isfahan',
      },
    ],
    region: {
      latitude: 45.52220671242907,
      longitude: -122.6653281029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  });
  const [searchText, setSearchText] = useState('');
  const [enabled, requestResolution] = useLocationSettings({
    priority: HIGH_ACCURACY,
  });

  const [mapState, setMapState] = useState({
    isGranted: false,
    coordinates: [51.189988, 32.260997],
  });

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search"
          style={styles.input}
        />
        <MapboxGL.MapView
          ref={(ref) => {
            _map = ref || _map;
          }}
          localizeLabels
          zoomEnabled
          scrollEnabled
          rotateEnabled
          style={styles.map}>
          {mapState.isGranted && (
            <MapboxGL.UserLocation
              renderMode="normal"
              androidRenderMode="normal"
              visible
              ref={(location) => {
                console.log({location});
              }}
              // onUpdate=setLocationManager({running: false})
              showUserLocation={true}
            />
          )}
          <MapboxGL.Camera
            animationDuration={4000}
            animationMode="flyTo"
            centerCoordinate={mapState.coordinates}
            zoomLevel={3.2}
            followUserLocation={mapState.isGranted}
          />
          {/* <MapboxGL.ShapeSource
            id={'exampleShapSource'}
            hitbox={{width: 20, height: 20}}
            onPress={(e) => {
              console.log(e);
            }}
            shape={data}>
            <MapboxGL.SymbolLayer
              id={'exampleIconName'}
              style={icon}></MapboxGL.SymbolLayer>
          </MapboxGL.ShapeSource>
          ; */}
          {data.features.map((user) => (
            <MapboxGL.PointAnnotation
              key={user.id}
              id={String(user.id)}
              coordinate={user.geometry.coordinates}>
              
                <Image
                  style={{width: 40, height: 40}}
                  source={require('./marker.png')}
                />
              

              <MapboxGL.Callout
                title={`Place: ${user.title}\nBio: ${user.description}`}
                containerStyle={{
                  flex: 1,
                  backgroundColor: '#fff',
                  borderRadius: 20,
                }}
              />
            </MapboxGL.PointAnnotation>
          ))}
        </MapboxGL.MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
  },
  map: {
    flex: 1,
  },
  input: {
    height: 50,
    width: 'auto',
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 6,
    fontSize: 19,
  },
  annotationContainer: {
    width: 20,
    height: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
});

export default MapScreen;

