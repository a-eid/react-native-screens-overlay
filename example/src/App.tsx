import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import RNScreensOverlay from 'react-native-screens-overlay';

export default function App() {
  React.useEffect(() => {
    console.log(RNScreensOverlay);
  }, []);
  return (
    <View style={styles.container}>
      <RNScreensOverlay shown draggable style={StyleSheet.absoluteFillObject}>
        <View style={{ backgroundColor: 'red', width: 100, height: 100 }} />
      </RNScreensOverlay>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
