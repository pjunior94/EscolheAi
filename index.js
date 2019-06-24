/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Home} from './src/screens';
import {name as appName} from './app.json';
console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => Home);
