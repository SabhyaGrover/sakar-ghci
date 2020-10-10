import React, { useState, useEffect } from 'react';
import { Image, Text, TextInput,StyleSheet, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../screens/config';
import { useNavigation} from '@react-navigation/native';
import { Chip } from 'react-native-paper';


export default function Registration() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigation = useNavigation();
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
                navigation.navigate('InterestChip', {screen:'InterestChip',params:{userData:data}})
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


const [selected, setSelected] = useState(false);
const [textColor, setTextColor] = useState(`#FBA200`);
const [style, setStyle] = useState({ borderColor: `#FBA200`, backgroundColor: `white` });

useEffect(() => {
    if (selected) {
        setTextColor(`white`);
        setStyle({ borderColor: `#FBA200`, backgroundColor: `#FBA200` });
    } else {
        setTextColor(`#FBA200`);
        setStyle({ borderColor: `#FBA200`, backgroundColor: `transparent` });
    }
}, [selected]);

const handlePress = () => {
    setSelected(!selected);
    if (chipPressed) {
        chipPressed(selected);
    }
};

    
  

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
    <Chip  onPress={() => console.log('Pressed')}>Example Chip</Chip>
    <Chip  onPress={() => console.log('Pressed')}>Example Chip</Chip>
    <Chip  onPress={() => console.log('Pressed')}>Example Chip</Chip>
    <Chip  onPress={() => console.log('Pressed')}>Example Chip</Chip>
    <Chip  onPress={() => console.log('Pressed')}>Example Chip</Chip>
    <Chip  onPress={() => console.log('Pressed')}>Example Chip</Chip>


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
        marginTop:10
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 190,
        width: '100%',
        alignSelf: "center",
        margin: 10
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
        marginTop: 40,
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