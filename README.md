# react-native-screens-overlay

overlay component for react native screens native stack.

## Installation

```sh
yarn add https://github.com/a-eid/react-native-screens-overlay#main
```

in you `appDelegate.m`  add the following code.

```objc
#import <react-native-screens-overlay/ScreensOverlayView.h>

@interface RNWindow : UIWindow
@end

@implementation RNWindow

- (void)didAddSubview:(UIView *)subview
{
  if (![subview isKindOfClass:[RNViewContainer class]]) {
    for (UIView *view in self.subviews) {
      if ([view isKindOfClass:[RNViewContainer class]]) {
        [self bringSubviewToFront:view];
      }
    }
  }
}

@end

// inside didFinishLaunchingWithOptions replace this line
self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];

// with this
self.window = [[RNWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
```

## Usage

```js
import ScreensOverlay from 'react-native-screens-overlay';


// add <ScreensOverlay /> as heigh as you can in your component tree.
function App(){
  return <>
    <NavigationContainer>
      {/* children*/}
      <ScreensOverlay style={StyleSheet.absoluteFill} pointerEvent="box-none">
        {/* all views here should always stay on top of screen transitions & modals.*/}
      </ScreensOverlay>
    </NavigationContainer>
  </>
}

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
