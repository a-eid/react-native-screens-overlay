import { Platform, requireNativeComponent, View } from 'react-native';

type WindowViewProps = {
  shown: boolean;
  draggable: boolean;
};

export const RNScreensOverlay =
  Platform.OS === 'ios'
    ? requireNativeComponent<WindowViewProps>('ReactNativeScreensOverlay')
    : View;

export default RNScreensOverlay;
