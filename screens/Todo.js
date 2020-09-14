import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialIconButtonsFooter from "../components/MaterialIconButtonsFooter";
import MaterialButtonWithShadow from "../components/MaterialButtonWithShadow";
import MaterialButtonPink from "../components/MaterialButtonPink";
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { useState, useEffect, useRef } from 'react';
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Todo(props) {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });
    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);
  return (
    <View style={styles.container}>
       <Text style={styles.list}>To Do List</Text>
       <View style={styles.entry} >
       <View style={styles.listRow}>
       <MaterialButtonWithShadow
          style={styles.materialButtonWithShadow}
          onPress={async () => {
            await sendPushNotification(expoPushToken);
          }}
        ></MaterialButtonWithShadow>
      <MaterialButtonPink
        style={styles.materialButtonPink}
        onPress={async () => {
          await sendPushNotification(expoPushToken);
        }}
      ></MaterialButtonPink>
      </View>
    <View style={styles.listRow}>
       <MaterialButtonWithShadow
          style={styles.materialButtonWithShadow}
          onPress={async () => {
            await sendPushNotification(expoPushToken);
          }}
        ></MaterialButtonWithShadow>
      <MaterialButtonPink
        style={styles.materialButtonPink}
      ></MaterialButtonPink>
      </View>
 <View style={styles.listRow}>
       <MaterialButtonWithShadow
          style={styles.materialButtonWithShadow}
        ></MaterialButtonWithShadow>
      <MaterialButtonPink
        style={styles.materialButtonPink}
      ></MaterialButtonPink>
      </View>
 <View style={styles.listRow}>
       <MaterialButtonWithShadow
          style={styles.materialButtonWithShadow}
        ></MaterialButtonWithShadow>
      <MaterialButtonPink
        style={styles.materialButtonPink}
      ></MaterialButtonPink>

      </View>

      </View>
    </View>
  );
}
async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { data: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  } return token;
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-start',

  },
  entry:
  {
    marginTop:100,
  },
  list: {
    marginTop:100,
    justifyContent:'center',
    color: "#121212",
    fontSize: 28
  },
  materialButtonWithShadow: {
  },
  listRow: {
    alignSelf:'center',
    marginTop:10,
    flexDirection:'row'
  },
  materialButtonPink: {
    alignContent:'center',
    width:'70%'
  }
});
