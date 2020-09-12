import React, { Component, useState }from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    requireNativeComponent,
} from "react-native";
//import Icon from 'react-native-vector-icons/Ionicons';
import Category from '../components/Card';
import { FlatList } from "react-native-gesture-handler";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
//import {reducer} from '../reducers/reducer';
//import {Provider, useDispatch} from 'react-redux';
//import { createStore} from 'redux'
//const { height, width } = Dimensions.get('window')
const axios = require('axios')
//const store = createStore(reducer)
//const dispatch = useDispatch()
export default class Home extends Component {
    
state = {
        vid : '',
        search:'',
        //isQuery:false,
    };

searchVid = event => {
    event.preventDefault();
    console.log(this.state.search);
    const fetch_vid = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${this.state.search}&type=video&key=AIzaSyBU26UZzy0GRd30VTQC9_XtDhhTZR5cjUQ`;
    axios.get(fetch_vid)
    .then( response => {
        console.log(this.state.search);
        this.setState({
        vid : response.data.items
    })
    })
    .catch(function(error){
        console.log(error)
    })
    };


async componentDidMount(){
       await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&regionCode=IN&key=AIzaSyBU26UZzy0GRd30VTQC9_XtDhhTZR5cjUQ`)
       .then(response => {
            //console.log(response);
         //console.log(response.data.items)
            this.setState({
                vid : response.data.items,
            });
        })
        .catch(function(error){
            console.log(error)
        })
    };

    render() {
        return(
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1}}>
                    <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>

                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                           
                        }}>
                            <Image source={require("../assets/images/logo-removebg.png")} resizeMode="contain" style={styles.image} size={30}/>

                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Search"
                                placeholderTextColor="grey"
                                style={{ flex: 1}}
                                onChangeText={search => this.setState({search})}
                                value={this.state.search}

                            />
                            <EvilIconsIcon name='arrow-right' size = {35} style={styles.icon} onPress={this.searchVid}/>

                        </View>

                    </View>

                                    <FlatList

                                        data={this.state.vid}
                                        renderItem={({ item }) =>{
                                        return <Category title={`${item.snippet.title}`} videoId={`${item.id.videoId}`}/>
                                        }
                                    }
                                    />
                </View>
            </SafeAreaView>

        );
    };
}


const styles = StyleSheet.create({
    image: {

        width:'10%',
        height: '100%',
      },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        color: "black",
        justifyContent:'center',
        alignSelf: "center",

      },
});