import { Platform, requireNativeComponent, View, ViewProps} from 'react-native';


export const RNScreensOverlay =
  Platform.OS === 'ios'
    ? requireNativeComponent<ViewProps>('ReactNativeScreensOverlay')
    : View;

export default RNScreensOverlay;
