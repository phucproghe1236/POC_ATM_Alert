/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import QRScan from './Demo/QRScan';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => QRScan);
