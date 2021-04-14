import React, {useState} from 'react';
import {View, Text, StyleSheet ,Image} from 'react-native';
import EmailPage from './FormValid/EmailPage';
import PhoneNumberPage from './FormValid/PhoneNumber';
import images from '../../../assets/images/images/index'

const EMAIL_PAGE = 1;
const PHONENUMBER_PAGE = 2;

const Login = () =>  {
    const [activePage, setActivePage] = useState(EMAIL_PAGE);

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={images.logos.user} />
            <View style={styles.header}>
                <Text style={[styles.headerText, activePage === EMAIL_PAGE && styles.activeHeaderText]}
                      onPress={() => setActivePage(EMAIL_PAGE)}>Email Page</Text>
                <Text style={[styles.headerText, activePage === PHONENUMBER_PAGE && styles.activeHeaderText]}
                      onPress={() => setActivePage(PHONENUMBER_PAGE)}>Phone Number Page</Text>
            </View>
            {activePage === EMAIL_PAGE ? <EmailPage/> : <PhoneNumberPage/>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        padding: 8,
    },
    headerText: {
        padding: 20,
        color: 'black',
        borderRadius: 8,
        left: 60
    },
    activeHeaderText: {
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold'
    },
    image: {
            height: 200,
            width: 200,
            marginBottom: 10,
            bottom: 10,
            left: 110
        }
});

export default Login;
