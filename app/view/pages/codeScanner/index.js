import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Linking,
  TouchableHighlight,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {CameraScreen} from 'react-native-camera-kit';

const Scanner = () => {
  const [qrvalue, setQrvalue] = useState('');
  const [opneScanner, setOpneScanner] = useState(false);
  const [camRef, setCamRef] = useState(null);

  const onOpenlink = () => {
    // If scanned then function to open URL in Browser
    Linking.openURL(qrvalue);
  };

  const onBarcodeScan = (qrvalue) => {
    // Called after te successful scanning of QRCode/Barcode
    setQrvalue(qrvalue);
    setOpneScanner(false);
  };

  const onOpneScanner = () => {
    // To Start Scanning

    async function requestCameraPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs permission for camera access',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // If CAMERA Permission is granted
          setQrvalue('');
          setOpneScanner(true);
        } else {
          alert('CAMERA permission denied');
        }
      } catch (err) {
        alert('Camera permission err', err);
        console.warn(err);
      }
    }
    // Calling the camera permission function
    requestCameraPermission();
  };
  const onBarcodeScanned = (e) => {
    setQrvalue(qrvalue);
    setOpneScanner(false);
    Alert.alert('Barcode value is' + e.data, 'Barcode type is' + e.type);
  };

  const onSuccess = (e) => {
    setQrvalue(e.data);
    setOpneScanner(false);
  };

  return (
    <View style={{flex: 1}}>
      {opneScanner ? (
        <View style={{flex: 1}}>
          {/* <CameraScreen
            showFrame={false}
            scanBarcode={true}
            laserColor={'red'}
            frameColor={'white'}
            onReadCode={(event) =>
              onBarcodeScan(event.nativeEvent.codeStringValue)
            }
          /> */}
          {/* <RNCamera
            ref={(ref) => setCamRef(ref)}
            style={Styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            autoFocus="on"
            onBarCodeRead={onBarcodeScanned}
            captureAudio={false}
          /> */}
          <QRCodeScanner
            onRead={onSuccess}
            flashMode={RNCamera.Constants.FlashMode.auto}
            showMarker={true}
            reactivate={true}
            topContent={
              <Text style={styles.centerText}>
                <Text style={styles.textBold}>scan the QR code</Text>
              </Text>
            }
            bottomContent={
              <TouchableOpacity style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>
                  Please scan inside the square
                </Text>
              </TouchableOpacity>
            }
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.titleText}>
            Barcode and QR Code Scanner using Camera in React Native
          </Text>
          <Text style={styles.textStyle}>
            {qrvalue ? 'Scanned Result: ' + qrvalue : ''}
          </Text>
          {qrvalue.includes('https://') ||
          qrvalue.includes('http://') ||
          qrvalue.includes('geo:') ? (
            <TouchableHighlight onPress={onOpenlink}>
              <Text style={styles.textLinkStyle}>
                {qrvalue.includes('geo:') ? 'Open in Map' : 'Open Link'}
              </Text>
            </TouchableHighlight>
          ) : null}
          <TouchableHighlight
            onPress={onOpneScanner}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Open QR Scanner</Text>
          </TouchableHighlight>
        </View>
      )}
    </View>
  );
};
const Styles = StyleSheet.create({
  _mainContainer: {
    flex: 1,
  },
  preview: {
    flex: 1,
  },
});

export default Scanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    marginTop: 16,
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
  textLinkStyle: {
    color: 'blue',
    paddingVertical: 20,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    flex: 1,
    fontSize: 21,
    color: 'rgb(0,122,255)',
    marginTop: 50,
    fontSize: 18,
  },
  buttonTouchable: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/* 

import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {RNCamera } from 'react-native-camera';

function Scan() {
  //variables initialization
  const [camRef, setCamRef] = useState(null);

  const  onBarcodeScanned = (e) => {
      Alert.alert("Barcode value is"+e.data ,"Barcode type is"+e.type);
}

  return (
    <View style={Styles._mainContainer}>
      <RNCamera
        ref={(ref) => setCamRef(ref)}
        style={Styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        autoFocus="on"
        onBarCodeRead={onBarcodeScanned}
        captureAudio={false}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  _mainContainer: {
    flex: 1,
  },
  preview: {
    flex: 1,
  },
});

export default Scan;
 */
