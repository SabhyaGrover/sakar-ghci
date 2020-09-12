import React from 'react';
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

export default Card