import { requireNativeComponent, ViewStyle } from 'react-native';

type ScreensOverlayProps = {
  color: string;
  style: ViewStyle;
};

export const ScreensOverlayViewManager = requireNativeComponent<ScreensOverlayProps>(
'ScreensOverlayView'
);

export default ScreensOverlayViewManager;
