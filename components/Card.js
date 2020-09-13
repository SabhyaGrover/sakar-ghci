import React,{Component} from 'react';
import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import { useNavigation ,useTheme} from '@react-navigation/native';

class Category extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 2 }}>
                    <Image source={{uri:`https://i.ytimg.com/vi/${this.props.videoId}/hqdefault.jpg`}}
                        style={styles.Image}
                        alt = 'thumbnail'
                    />
                </View>
                <View style={styles.body}>
                    <Text style={styles.Text}>{this.props.title}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#CCC",
        flexWrap: "nowrap",
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
          width: -2,
          height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 3,
        overflow: "hidden"
    },
    Image:{
    backgroundColor: "#ccc",
    minHeight: 210,
    flex: 1
    },
    body:{
        padding: 16
    },
    Text:{
        lineHeight: 20,
        fontSize: 14,
        color: "#424242"
    }
});
export default Category