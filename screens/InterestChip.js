import * as React from 'react';
import { Chip } from 'react-native-paper';

const MyComponent = () => (
  <Chip icon="information" style = {{marginTop:100}} onPress={() => console.log('Pressed')}>Example Chip</Chip>
);

export default MyComponent;