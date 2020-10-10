import React, { useEffect, useState } from 'react';
import { Image, Text, TextInput,StyleSheet, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from './config';
import { useNavigation} from '@react-navigation/native';
import {SelectableChips} from 'react-native-chip/SelectableChips';
import {Chip} from 'react-native-paper';
export default function Registration() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigation = useNavigation();
    var rec=[];
    const onFooterLinkPress = () => {
        navigation.navigate('Welcome to Sakar!')
    }

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
    }
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
        const uid = response.user.uid
        const data = {
            id: uid,
            email,
        };
        response.user.updateProfile({
            displayName:fullName
        })
        const usersRef = firebase.firestore().collection('users')
        usersRef
            .doc(uid)
            .set(data)
            .then(() => {
                //changed routes
                navigation.navigate('Sakar', {userData:data})
                //console.log(data);
            })
            .catch((error) => {
                alert(error)
            });
    })
    .catch((error) => {
        alert(error)
});


}

useEffect(() => {
    firebase.database()
    .ref('interests')
    .on('value',(snapshot) => {
    rec = snapshot.val()
    })
});

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                 <Image
                    style={styles.logo}
                    source={require('../assets/images/sakar_logo.png')}
                />
                
                <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                  <Text style={styles.footerText1}>What are you looking for? </Text>
                <View style={{marginTop:10, flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
<Chip  onPress={() => console.log(rec.Basics)}>Basics</Chip>
<Chip  onPress={() => console.log(rec.AppDev)}>App Development</Chip>
<Chip  onPress={() => console.log(rec.CP)}>Competitive Programming</Chip>
<Chip  onPress={() => console.log(rec.AI)}>Artificial Intelligence</Chip>
<Chip  onPress={() => console.log(rec.WebDeV)}>Web Development</Chip>
<Chip  onPress={() => console.log(rec.ioT)}>ioT</Chip>
</View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Continue  </Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop:50
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 200,
        width: '100%',
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#8B008B',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
        alignSelf:'stretch',
        textAlign:'center'
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d',
        alignSelf:'stretch',
        textAlign:'center'
    },
    footerText1: {
        fontSize: 16,
        color: 'blue',
        marginTop: 20,
        alignSelf:'stretch',
        textAlign:'center'
    },
    
    footerLink: {
        color: "#8B008B",
        fontWeight: "bold",
        fontSize: 16,
        alignSelf:'stretch',
        textAlign:'center'
    }
})