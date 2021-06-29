import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import RNScreensOverlay from 'react-native-screens-overlay';

export default function App() {
  React.useEffect(() => {
    console.log(RNScreensOverlay);
  }, []);
  return (
    <>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={{ flex: 1, backgroundColor: 'green' }} />
      </View>
      <RNScreensOverlay
        shown
        draggable={false}
        style={StyleSheet.absoluteFillObject}
      >
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            width: 100,
            height: 100,
            margin: 100,
          }}
        />
      </RNScreensOverlay>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
