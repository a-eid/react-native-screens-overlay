# react-native-screens-overlay

overlay component for react native screens native stack.

## Installation

```sh
yarn add https://github.com/a-eid/react-native-screens-overlay#main
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
